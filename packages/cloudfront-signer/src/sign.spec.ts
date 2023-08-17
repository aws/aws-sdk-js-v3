import { parseUrl } from "@smithy/url-parser";
import { createSign, createVerify } from "crypto";
import { mkdtempSync, rmdirSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { resolve } from "path";

import { getSignedCookies, getSignedUrl } from "./index";

const url = "https://d111111abcdef8.cloudfront.net/private-content/private.jpeg";
const keyPairId = "APKAEIBAERJR2EXAMPLE";
const dateLessThan = "2020-01-01";
const epochDateLessThan = Math.round(new Date(dateLessThan).getTime() / 1000);
const dateGreaterThan = "2019-12-01";
const epochDateGreaterThan = Math.round(new Date(dateGreaterThan).getTime() / 1000);
const ipAddress = "10.0.0.0";
const privateKey = Buffer.from(`
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAuHfxvylv0IgfsJkualzZtCqwLyg19Gcsy+jVAAioVtWBOgxE
IYSsED+yzryecDnniJGokXiGTt6nlJk5o95jNSnKw9KOThWey95WudDnEcUWKJow
dlcA1B2iXBx4cmwwdekNxs/hHZjubY+kHuaDc0D/tJYyiN7t84wQA/slRHZ0tDBy
pGI4LeNFn3fmu4dvHcvSYFoa1sV/FDe0P6OHjrkG36XE6gh9+yHEFLAsGzuWZlIH
KmdPx8wuz/73GPnQ/P3+sGjwVjimtzEo5R6VoyMHWHRjenjxN/oFrtizXXuRDsKw
9Vvg8FO3MUsYAEWmKZM3DI9/+niZl/GCjgCIlQIDAQABAoIBAQCX1mKuLrVSuDkd
a3jBI9wuaFTM/BQtMB+3V9a7SGUH1IWh+ia6UDIwzb2oXaksRv1FdF+EHeivUqYt
slG3iH2wbM3xkYaAz1r+A+zu1fzcq5UppoDtZ3/PGPVjTCv4QwVAiKxGUSXC7vaS
SAGXTbY1T/Mp+dduwdCq/0bPgBGU32WzAGtx/JCnKD8brShrcwuGtirDq4c9Pq0T
FOApejyMoYwN0Z6jkErU1qSiEKp/SZrQTO+5BoyjwlZTe8dWjAw4srJ4jH9q1zxm
OZDT+80HnV6FiWqlitqDWQJvPhpW/PMTEmklZZw1WThqRxtm2Xee/KAD5grq+Xho
5xp30A4BAoGBAOXFrkOW65Z8GYzyCjw7XgFkSLA4Dhiwzebxdkv+s2NzHhzGz7pf
Dqe8pQ/bS1B6PLi9v+f8RjP9f1bY3QPxYwfYLwhL/JB4pvLNcGRUQ0fSzWcpmhWH
FN0V6K0kDswC9QL3vbEg9V/MM6EvwNxCPiZB6NQtOqhd48ErZ2cRQKBFAoGBAM2G
aqcWYpyDd06Vc7iVN1QqabpGkDfdk8XC/21ZTOZOQocplv9k+kzSxce8KMZxyQVm
K7D6Atx9uqEdqEutvgdYrJa+Br3VL2oLcBiYPOhuJROyl7Zl8bBeanYAhDraZWbL
tVP/6h9dzowPvcNm6e6SVl+uShqKJb4tv0fftpQRAoGAEXhpWpxEB2oiKzRQEOpW
qHZujG+Gqtvum+uqGfcgvqQHGxsGul316E0Qo9cBr/nLWiSbTdFBqTxSDVFp5J3a
8MLAOLpGVtnFn9p8/DPn9bMSiRCBtbdSn8jFqzx9n4duB668jpY58fG9zzipSlYD
EbebM17JAfo5kftx3kVSi50CgYBPXPd0PA2qOI3ql4WPIneyFYqsNrFcEUEN3cW6
mQA78r536RR43KpW3hEnlr38G1YvsotulKxkLlzR+FzTlGzL82756rk5tsfPYElS
Bf+HFXlVyOISuf0BSQQ9OufUvh7n+gO0Qx9KK3Ql27JAcU4mJPYbjnbpFq2Kaany
fC3JsQKBgANzZbf9D0lgQE1wsb45fzrAPAqRQHeVY7V8sZPQoJFcZ2Ymp/3L/UHc
NwfPmGXHQDQaK9I3XpHfbyOelD6ghHi/wZj0sKR3Uoo84n8sIpCdUvwitjlHlZBE
aoCHJ9c5Pnu6FwMAjP8aaKLQDvoHZKVWL2Ml6A6V3Ed95Itp/g2J
-----END RSA PRIVATE KEY-----`);
const passphrase = "SAMPLE";

function createSignature(data: string): string {
  const signer = createSign("RSA-SHA1");
  signer.update(data);
  return normalizeBase64(signer.sign(privateKey, "base64"));
}
function verifySignature(signature: string, data: string): boolean {
  const verifier = createVerify("RSA-SHA1");
  verifier.update(data);
  return verifier.verify(privateKey, signature, "base64");
}
function encodeToBase64(str: string): string {
  return normalizeBase64(Buffer.from(str).toString("base64"));
}
function normalizeBase64(str: string): string {
  return str.replace(/\+/g, "-").replace(/=/g, "_").replace(/\//g, "~");
}
function denormalizeBase64(str: string): string {
  return str.replace(/\-/g, "+").replace(/_/g, "=").replace(/~/g, "/");
}

describe("getSignedUrl", () => {
  it("should maintain query params after signing a URL", () => {
    const url = `https://example.com/private.jpeg?foo=${encodeURIComponent("bar &=; baz")}`;
    const result = parseUrl(
      getSignedUrl({
        url,
        keyPairId,
        dateLessThan,
        privateKey,
        passphrase,
      })
    );
    if (!result.query) {
      throw new Error("query parameter is undefined");
    }
    expect(result.query["foo"]).toBe("bar &=; baz");
  });
  it("should include url path in policy of signed URL", () => {
    const url = "https://example.com/private.jpeg?foo=bar";
    const result = parseUrl(
      getSignedUrl({
        url,
        keyPairId,
        dateLessThan,
        privateKey,
        passphrase,
      })
    );
    if (!result.query) {
      throw new Error("query parameter is undefined");
    }
    expect(result.query["Signature"]).toBeDefined();
    const signatureQueryParam = denormalizeBase64(result.query["Signature"] as string);
    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: url,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": epochDateLessThan,
            },
          },
        },
      ],
    });
    expect(verifySignature(signatureQueryParam, policyStr)).toBeTruthy();
  });
  it("should sign a URL with a canned policy", () => {
    const result = getSignedUrl({
      url,
      keyPairId,
      dateLessThan,
      privateKey,
      passphrase,
    });
    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: url,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": epochDateLessThan,
            },
          },
        },
      ],
    });
    const signature = createSignature(policyStr);
    expect(result).toBe(`${url}?Expires=${epochDateLessThan}&Key-Pair-Id=${keyPairId}&Signature=${signature}`);
    const parsedUrl = parseUrl(result);
    expect(parsedUrl).toBeDefined();
    const signatureQueryParam = denormalizeBase64(parsedUrl.query["Signature"] as string);
    expect(verifySignature(signatureQueryParam, policyStr)).toBeTruthy();
  });
  it("should sign a URL with a custom policy containing a start date", () => {
    const result = getSignedUrl({
      url,
      keyPairId,
      dateLessThan,
      dateGreaterThan,
      privateKey,
      passphrase,
    });
    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: url,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": epochDateLessThan,
            },
            DateGreaterThan: {
              "AWS:EpochTime": epochDateGreaterThan,
            },
          },
        },
      ],
    });
    const signature = createSignature(policyStr);
    expect(result).toBe(`${url}?Policy=${encodeToBase64(policyStr)}&Key-Pair-Id=${keyPairId}&Signature=${signature}`);
    const parsedUrl = parseUrl(result);
    expect(parsedUrl).toBeDefined();
    const signatureQueryParam = denormalizeBase64(parsedUrl.query["Signature"] as string);
    expect(verifySignature(signatureQueryParam, policyStr)).toBeTruthy();
  });
  it("should sign a URL with a custom policy containing an ip address", () => {
    const result = getSignedUrl({
      url,
      keyPairId,
      dateLessThan,
      ipAddress,
      privateKey,
      passphrase,
    });
    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: url,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": epochDateLessThan,
            },
            IpAddress: {
              "AWS:SourceIp": `${ipAddress}/32`,
            },
          },
        },
      ],
    });
    const signature = createSignature(policyStr);
    expect(result).toBe(`${url}?Policy=${encodeToBase64(policyStr)}&Key-Pair-Id=${keyPairId}&Signature=${signature}`);
    const parsedUrl = parseUrl(result);
    expect(parsedUrl).toBeDefined();
    const signatureQueryParam = denormalizeBase64(parsedUrl.query["Signature"] as string);
    expect(verifySignature(signatureQueryParam, policyStr)).toBeTruthy();
  });
  it("should sign a URL with a custom policy containing a start date and ip address", () => {
    const result = getSignedUrl({
      url,
      keyPairId,
      dateLessThan,
      dateGreaterThan,
      ipAddress,
      privateKey,
      passphrase,
    });
    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: url,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": epochDateLessThan,
            },
            DateGreaterThan: {
              "AWS:EpochTime": epochDateGreaterThan,
            },
            IpAddress: {
              "AWS:SourceIp": `${ipAddress}/32`,
            },
          },
        },
      ],
    });
    const signature = createSignature(policyStr);
    expect(result).toBe(`${url}?Policy=${encodeToBase64(policyStr)}&Key-Pair-Id=${keyPairId}&Signature=${signature}`);
    const parsedUrl = parseUrl(result);
    expect(parsedUrl).toBeDefined();
    const signatureQueryParam = denormalizeBase64(parsedUrl.query["Signature"] as string);
    expect(verifySignature(signatureQueryParam, policyStr)).toBeTruthy();
  });
  it("should allow an ip address with and without a mask", () => {
    const baseArgs = {
      url,
      keyPairId,
      dateLessThan,
      privateKey,
      passphrase,
    };
    expect(
      getSignedUrl({
        ...baseArgs,
        ipAddress: "10.0.0.0/32",
      })
    ).toBeTruthy();
    expect(
      getSignedUrl({
        ...baseArgs,
        ipAddress: "10.0.0.0",
      })
    ).toBeTruthy();
  });
  it("should throw an error when the ip address is invalid", () => {
    const baseArgs = {
      url,
      keyPairId,
      dateLessThan,
      privateKey,
      passphrase,
    };
    expect(() =>
      getSignedUrl({
        ...baseArgs,
        ipAddress: "10.0.0.0/",
      })
    ).toThrow('IP address "10.0.0.0/" is invalid due to missing ip or mask part of CIDR.');
    expect(() =>
      getSignedUrl({
        ...baseArgs,
        ipAddress: "/32",
      })
    ).toThrow('IP address "/32" is invalid due to missing ip or mask part of CIDR.');
    expect(() =>
      getSignedUrl({
        ...baseArgs,
        ipAddress: "10.0.0.0/-1",
      })
    ).toThrow('IP address "10.0.0.0/-1" is invalid due to invalid mask.');
    expect(() =>
      getSignedUrl({
        ...baseArgs,
        ipAddress: "10.0.0.0/33",
      })
    ).toThrow('IP address "10.0.0.0/33" is invalid due to invalid mask.');
    expect(() =>
      getSignedUrl({
        ...baseArgs,
        ipAddress: "10.0.0.-1",
      })
    ).toThrow('IP address "10.0.0.-1" is invalid due to invalid IP octets.');
    expect(() =>
      getSignedUrl({
        ...baseArgs,
        ipAddress: "10.0.0.256",
      })
    ).toThrow('IP address "10.0.0.256" is invalid due to invalid IP octets.');
  });
  it("should sign a RTMP URL", () => {
    const url = "rtmp://d111111abcdef8.cloudfront.net/private-content/private.jpeg";
    const result = getSignedUrl({
      url,
      keyPairId,
      dateLessThan,
      privateKey,
      passphrase,
    });
    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: "private-content/private.jpeg",
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": epochDateLessThan,
            },
          },
        },
      ],
    });
    const signature = createSignature(policyStr);
    expect(result).toBe(
      `private-content/private.jpeg?Expires=${epochDateLessThan}&Key-Pair-Id=${keyPairId}&Signature=${signature}`
    );
    expect(verifySignature(denormalizeBase64(signature), policyStr)).toBeTruthy();
  });
  it("should sign a URL with a policy provided by the user", () => {
    const policy = '{"foo":"bar"}';
    const result = getSignedUrl({
      url,
      keyPairId,
      privateKey,
      policy,
      passphrase,
    });
    const signature = createSignature(policy);
    expect(result).toBe(`${url}?Policy=${encodeToBase64(policy)}&Key-Pair-Id=${keyPairId}&Signature=${signature}`);
    const signatureQueryParam = denormalizeBase64(signature);
    expect(verifySignature(signatureQueryParam, policy)).toBeTruthy();
  });
});

describe("getSignedCookies", () => {
  it("should allow an ip address with and without a mask", () => {
    const baseArgs = {
      url,
      keyPairId,
      dateLessThan,
      privateKey,
      passphrase,
    };
    expect(
      getSignedCookies({
        ...baseArgs,
        ipAddress: "10.0.0.0/32",
      })
    ).toBeTruthy();
    expect(
      getSignedCookies({
        ...baseArgs,
        ipAddress: "10.0.0.0",
      })
    ).toBeTruthy();
  });
  it("should throw an error when the ip address is invalid", () => {
    const baseArgs = {
      url,
      keyPairId,
      dateLessThan,
      privateKey,
      passphrase,
    };
    expect(() =>
      getSignedCookies({
        ...baseArgs,
        ipAddress: "10.0.0.0/",
      })
    ).toThrow('IP address "10.0.0.0/" is invalid due to missing ip or mask part of CIDR.');
    expect(() =>
      getSignedCookies({
        ...baseArgs,
        ipAddress: "/32",
      })
    ).toThrow('IP address "/32" is invalid due to missing ip or mask part of CIDR.');
    expect(() =>
      getSignedCookies({
        ...baseArgs,
        ipAddress: "10.0.0.0/-1",
      })
    ).toThrow('IP address "10.0.0.0/-1" is invalid due to invalid mask.');
    expect(() =>
      getSignedCookies({
        ...baseArgs,
        ipAddress: "10.0.0.0/33",
      })
    ).toThrow('IP address "10.0.0.0/33" is invalid due to invalid mask.');
    expect(() =>
      getSignedCookies({
        ...baseArgs,
        ipAddress: "10.0.0.-1",
      })
    ).toThrow('IP address "10.0.0.-1" is invalid due to invalid IP octets.');
    expect(() =>
      getSignedCookies({
        ...baseArgs,
        ipAddress: "10.0.0.256",
      })
    ).toThrow('IP address "10.0.0.256" is invalid due to invalid IP octets.');
  });
  it("should be able sign cookies that contain a URL with wildcards", () => {
    const url = "https://example.com/private-content/*";
    const result = getSignedCookies({
      url,
      keyPairId,
      dateLessThan,
      privateKey,
      passphrase,
    });
    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: url,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": epochDateLessThan,
            },
          },
        },
      ],
    });
    expect(verifySignature(denormalizeBase64(result["CloudFront-Signature"]), policyStr)).toBeTruthy();
  });
  it("should sign cookies with a canned policy", () => {
    const result = getSignedCookies({
      url,
      keyPairId,
      dateLessThan,
      privateKey,
      passphrase,
    });
    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: url,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": epochDateLessThan,
            },
          },
        },
      ],
    });
    const signature = createSignature(policyStr);
    const expected = {
      "CloudFront-Expires": epochDateLessThan,
      "CloudFront-Key-Pair-Id": keyPairId,
      "CloudFront-Signature": signature,
    };
    expect(result["CloudFront-Expires"]).toBe(expected["CloudFront-Expires"]);
    expect(result["CloudFront-Key-Pair-Id"]).toBe(expected["CloudFront-Key-Pair-Id"]);
    expect(result["CloudFront-Signature"]).toBe(expected["CloudFront-Signature"]);
    expect(verifySignature(denormalizeBase64(result["CloudFront-Signature"]), policyStr)).toBeTruthy();
  });
  it("should sign cookies with a custom policy containing a start date", () => {
    const result = getSignedCookies({
      url,
      keyPairId,
      dateLessThan,
      dateGreaterThan,
      privateKey,
      passphrase,
    });
    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: url,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": epochDateLessThan,
            },
            DateGreaterThan: {
              "AWS:EpochTime": epochDateGreaterThan,
            },
          },
        },
      ],
    });
    const signature = createSignature(policyStr);
    const expected = {
      "CloudFront-Policy": encodeToBase64(policyStr),
      "CloudFront-Key-Pair-Id": keyPairId,
      "CloudFront-Signature": signature,
    };
    expect(result["CloudFront-Policy"]).toBe(expected["CloudFront-Policy"]);
    expect(result["CloudFront-Key-Pair-Id"]).toBe(expected["CloudFront-Key-Pair-Id"]);
    expect(result["CloudFront-Signature"]).toBe(expected["CloudFront-Signature"]);
    expect(verifySignature(denormalizeBase64(result["CloudFront-Signature"]), policyStr)).toBeTruthy();
  });
  it("should sign cookies with a custom policy containing an ip address", () => {
    const result = getSignedCookies({
      url,
      keyPairId,
      dateLessThan,
      ipAddress,
      privateKey,
      passphrase,
    });
    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: url,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": epochDateLessThan,
            },
            IpAddress: {
              "AWS:SourceIp": `${ipAddress}/32`,
            },
          },
        },
      ],
    });
    const signature = createSignature(policyStr);
    const expected = {
      "CloudFront-Policy": encodeToBase64(policyStr),
      "CloudFront-Key-Pair-Id": keyPairId,
      "CloudFront-Signature": signature,
    };
    expect(result["CloudFront-Policy"]).toBe(expected["CloudFront-Policy"]);
    expect(result["CloudFront-Key-Pair-Id"]).toBe(expected["CloudFront-Key-Pair-Id"]);
    expect(result["CloudFront-Signature"]).toBe(expected["CloudFront-Signature"]);
    expect(verifySignature(denormalizeBase64(result["CloudFront-Signature"]), policyStr)).toBeTruthy();
  });
  it("should sign cookies with a custom policy containing a start date and ip address", () => {
    const result = getSignedCookies({
      url,
      keyPairId,
      dateLessThan,
      dateGreaterThan,
      ipAddress,
      privateKey,
      passphrase,
    });
    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: url,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": epochDateLessThan,
            },
            DateGreaterThan: {
              "AWS:EpochTime": epochDateGreaterThan,
            },
            IpAddress: {
              "AWS:SourceIp": `${ipAddress}/32`,
            },
          },
        },
      ],
    });
    const signature = createSignature(policyStr);
    const expected = {
      "CloudFront-Policy": encodeToBase64(policyStr),
      "CloudFront-Key-Pair-Id": keyPairId,
      "CloudFront-Signature": signature,
    };
    expect(result["CloudFront-Policy"]).toBe(expected["CloudFront-Policy"]);
    expect(result["CloudFront-Key-Pair-Id"]).toBe(expected["CloudFront-Key-Pair-Id"]);
    expect(result["CloudFront-Signature"]).toBe(expected["CloudFront-Signature"]);
    expect(verifySignature(denormalizeBase64(result["CloudFront-Signature"]), policyStr)).toBeTruthy();
  });
  it("should sign a URL with a policy provided by the user", () => {
    const policy = '{"foo":"bar"}';
    const result = getSignedCookies({
      url,
      keyPairId,
      privateKey,
      policy,
      passphrase,
    });
    const signature = createSignature(policy);
    const expected = {
      "CloudFront-Policy": encodeToBase64(policy),
      "CloudFront-Key-Pair-Id": keyPairId,
      "CloudFront-Signature": signature,
    };
    expect(result["CloudFront-Policy"]).toBe(expected["CloudFront-Policy"]);
    expect(result["CloudFront-Key-Pair-Id"]).toBe(expected["CloudFront-Key-Pair-Id"]);
    expect(result["CloudFront-Signature"]).toBe(expected["CloudFront-Signature"]);
    expect(verifySignature(denormalizeBase64(result["CloudFront-Signature"]), policy)).toBeTruthy();
  });
});
