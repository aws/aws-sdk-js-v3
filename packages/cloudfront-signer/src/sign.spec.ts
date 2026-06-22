import { parseUrl } from "@smithy/core/protocols";
import { createSign, createVerify } from "node:crypto";
import { describe, expect, test as it } from "vitest";

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
    const signatureQueryParam = denormalizeBase64(parsedUrl.query!["Signature"] as string);
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
    const signatureQueryParam = denormalizeBase64(parsedUrl.query!["Signature"] as string);
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
    const signatureQueryParam = denormalizeBase64(parsedUrl.query!["Signature"] as string);
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
    const signatureQueryParam = denormalizeBase64(parsedUrl.query!["Signature"] as string);
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

  it("should sign a URL automatically extracted from a policy provided by the user", () => {
    const policy = JSON.stringify({ Statement: [{ Resource: url }] });
    const result = getSignedUrl({
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

  describe("should not normalize the URL", () => {
    it.each([".", ".."])("with '%s'", (folderName) => {
      const urlWithFolderName = `https://d111111abcdef8.cloudfront.net/public-content/${folderName}/private-content/private.jpeg`;
      const policy = JSON.stringify({ Statement: [{ Resource: urlWithFolderName }] });
      const result = getSignedUrl({
        keyPairId,
        privateKey,
        policy,
        passphrase,
      });
      const signature = createSignature(policy);
      expect(result.startsWith(urlWithFolderName)).toBeTruthy();
      const signatureQueryParam = denormalizeBase64(signature);
      expect(verifySignature(signatureQueryParam, policy)).toBeTruthy();
    });
  });

  it("should URL-encode spaces in the path", () => {
    const urlWithSpaces = "https://d111111abcdef8.cloudfront.net/private content/My File.pdf";
    const result = getSignedUrl({
      url: urlWithSpaces,
      keyPairId,
      dateLessThan,
      privateKey,
      passphrase,
    });
    expect(result).toContain("private%20content/My%20File.pdf");
    expect(result).not.toContain("private content");
    expect(result).not.toContain("My File.pdf");
  });

  it("should URL-encode special characters in the path while preserving path structure", () => {
    const urlWithSpecialChars = "https://d111111abcdef8.cloudfront.net/path with spaces/file[1].pdf";
    const result = getSignedUrl({
      url: urlWithSpecialChars,
      keyPairId,
      dateLessThan,
      privateKey,
      passphrase,
    });
    expect(result).toContain("file%5B1%5D.pdf");
    expect(result).not.toContain("file[1].pdf");
  });

  it("should not double-encode already-encoded URLs", () => {
    const alreadyEncodedUrl = "https://d111111abcdef8.cloudfront.net/private%20content/My%20File.pdf";
    const result = getSignedUrl({
      url: alreadyEncodedUrl,
      keyPairId,
      dateLessThan,
      privateKey,
      passphrase,
    });
    expect(result).toContain("private%20content/My%20File.pdf");
    expect(result).not.toContain("%2520");
  });

  // CloudFront verifies the signature against the URL on the wire (the encoded
  // form). The signed policy Resource must therefore reference the encoded URL,
  // otherwise CloudFront returns 403 AccessDenied. Regression introduced in
  // v3.1046.0; see https://github.com/aws/aws-sdk-js-v3/issues/8033.
  it("should sign the encoded URL when the path contains special characters", () => {
    const urlWithSpecialChars =
      "https://d111111abcdef8.cloudfront.net/i/foo/bar.png/format=webp,height=2000,width=2000";
    const encodedUrl =
      "https://d111111abcdef8.cloudfront.net/i/foo/bar.png/format%3Dwebp%2Cheight%3D2000%2Cwidth%3D2000";
    const result = getSignedUrl({
      url: urlWithSpecialChars,
      keyPairId,
      dateLessThan,
      privateKey,
      passphrase,
    });
    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: encodedUrl,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": epochDateLessThan,
            },
          },
        },
      ],
    });
    const expectedSignature = createSignature(policyStr);
    expect(result).toBe(
      `${encodedUrl}?Expires=${epochDateLessThan}&Key-Pair-Id=${keyPairId}&Signature=${expectedSignature}`
    );
    const parsedUrl = parseUrl(result);
    const signatureQueryParam = denormalizeBase64(parsedUrl.query!["Signature"] as string);
    expect(verifySignature(signatureQueryParam, policyStr)).toBeTruthy();
  });

  it("should sign the encoded URL when the path contains spaces", () => {
    const urlWithSpaces = "https://d111111abcdef8.cloudfront.net/private content/My File.pdf";
    const encodedUrl = "https://d111111abcdef8.cloudfront.net/private%20content/My%20File.pdf";
    const result = getSignedUrl({
      url: urlWithSpaces,
      keyPairId,
      dateLessThan,
      privateKey,
      passphrase,
    });
    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: encodedUrl,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": epochDateLessThan,
            },
          },
        },
      ],
    });
    const expectedSignature = createSignature(policyStr);
    expect(result).toBe(
      `${encodedUrl}?Expires=${epochDateLessThan}&Key-Pair-Id=${keyPairId}&Signature=${expectedSignature}`
    );
    const parsedUrl = parseUrl(result);
    const signatureQueryParam = denormalizeBase64(parsedUrl.query!["Signature"] as string);
    expect(verifySignature(signatureQueryParam, policyStr)).toBeTruthy();
  });

  it("should sign the encoded URL for a custom policy with special characters in the path", () => {
    const urlWithSpecialChars =
      "https://d111111abcdef8.cloudfront.net/i/foo/bar.png/format=webp,height=2000,width=2000";
    const encodedUrl =
      "https://d111111abcdef8.cloudfront.net/i/foo/bar.png/format%3Dwebp%2Cheight%3D2000%2Cwidth%3D2000";
    const result = getSignedUrl({
      url: urlWithSpecialChars,
      keyPairId,
      dateLessThan,
      ipAddress,
      privateKey,
      passphrase,
    });
    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: encodedUrl,
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
    const expectedSignature = createSignature(policyStr);
    expect(result).toBe(
      `${encodedUrl}?Policy=${encodeToBase64(policyStr)}&Key-Pair-Id=${keyPairId}&Signature=${expectedSignature}`
    );
    const parsedUrl = parseUrl(result);
    const signatureQueryParam = denormalizeBase64(parsedUrl.query!["Signature"] as string);
    expect(verifySignature(signatureQueryParam, policyStr)).toBeTruthy();
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

  it("should sign cookies with a policy provided by the user without a url", () => {
    const policy = '{"foo":"bar"}';
    const result = getSignedCookies({
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

describe("getSignedUrl- when signing a URL with a date range", () => {
  const dateString = "2024-05-17T12:30:45.000Z";
  const dateGreaterThanString = "2024-05-16T12:30:45.000Z";
  const dateNumber = 1125674245900;
  const dateGreaterThanNumber = 1716034245000;
  const dateObject = new Date(dateString);
  const dateGreaterThanObject = new Date(dateGreaterThanString);

  it("allows string input compatible with Date constructor", () => {
    const epochDateLessThan = Math.round(new Date(dateString).getTime() / 1000);
    const resultUrl = getSignedUrl({
      url,
      keyPairId,
      dateLessThan: dateString,
      privateKey,
      passphrase,
    });
    const resultCookies = getSignedCookies({
      url,
      keyPairId,
      dateLessThan: dateString,
      privateKey,
      passphrase,
    });

    expect(resultUrl).toContain(`Expires=${epochDateLessThan}`);
    expect(resultCookies["CloudFront-Expires"]).toBe(epochDateLessThan);
  });

  it("allows number input in milliseconds compatible with Date constructor", () => {
    const epochDateLessThan = Math.round(new Date(dateNumber).getTime() / 1000);
    const resultUrl = getSignedUrl({
      url,
      keyPairId,
      dateLessThan: dateNumber,
      privateKey,
      passphrase,
    });
    const resultCookies = getSignedCookies({
      url,
      keyPairId,
      dateLessThan: dateNumber,
      privateKey,
      passphrase,
    });

    expect(resultUrl).toContain(`Expires=${epochDateLessThan}`);
    expect(resultCookies["CloudFront-Expires"]).toBe(epochDateLessThan);
  });

  it("allows Date object input", () => {
    const epochDateLessThan = Math.round(dateObject.getTime() / 1000);
    const resultUrl = getSignedUrl({
      url,
      keyPairId,
      dateLessThan: dateObject,
      privateKey,
      passphrase,
    });
    const resultCookies = getSignedCookies({
      url,
      keyPairId,
      dateLessThan: dateObject,
      privateKey,
      passphrase,
    });

    expect(resultUrl).toContain(`Expires=${epochDateLessThan}`);
    expect(resultCookies["CloudFront-Expires"]).toBe(epochDateLessThan);
  });

  it("allows string input for date range", () => {
    const result = getSignedUrl({
      url,
      keyPairId,
      dateLessThan: dateString,
      dateGreaterThan: dateGreaterThanString,
      privateKey,
      passphrase,
    });

    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: url,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": Math.round(new Date(dateString).getTime() / 1000),
            },
            DateGreaterThan: {
              "AWS:EpochTime": Math.round(new Date(dateGreaterThanString).getTime() / 1000),
            },
          },
        },
      ],
    });

    const parsedUrl = parseUrl(result);
    expect(parsedUrl).toBeDefined();
    const signatureQueryParam = denormalizeBase64(parsedUrl.query!["Signature"] as string);
    expect(verifySignature(signatureQueryParam, policyStr)).toBeTruthy();
  });

  it("allows number input for date range", () => {
    const result = getSignedUrl({
      url,
      keyPairId,
      dateLessThan: dateNumber,
      dateGreaterThan: dateGreaterThanNumber,
      privateKey,
      passphrase,
    });

    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: url,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": Math.round(dateNumber / 1000),
            },
            DateGreaterThan: {
              "AWS:EpochTime": Math.round(dateGreaterThanNumber / 1000),
            },
          },
        },
      ],
    });

    const parsedUrl = parseUrl(result);
    expect(parsedUrl).toBeDefined();
    const signatureQueryParam = denormalizeBase64(parsedUrl.query!["Signature"] as string);
    expect(verifySignature(signatureQueryParam, policyStr)).toBeTruthy();
  });

  it("allows Date object input for date range", () => {
    const result = getSignedUrl({
      url,
      keyPairId,
      dateLessThan: dateObject,
      dateGreaterThan: dateGreaterThanObject,
      privateKey,
      passphrase,
    });

    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: url,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": Math.round(dateObject.getTime() / 1000),
            },
            DateGreaterThan: {
              "AWS:EpochTime": Math.round(dateGreaterThanObject.getTime() / 1000),
            },
          },
        },
      ],
    });

    const parsedUrl = parseUrl(result);
    expect(parsedUrl).toBeDefined();
    const signatureQueryParam = denormalizeBase64(parsedUrl.query!["Signature"] as string);
    expect(verifySignature(signatureQueryParam, policyStr)).toBeTruthy();
  });
});

describe("url component encoding", () => {
  it("should use standard encoding for query params in the base URL", () => {
    const url =
      "https://d111111abcdef8.cloudfront.net/private-content/private.jpeg?q=!@#$%^&*()&image-description=aws's image&'''&!()=5";
    const signedUrl = getSignedUrl({
      url: url,
      keyPairId,
      privateKey,
      dateLessThan: "2026-01-01",
    });

    const target =
      "https://d111111abcdef8.cloudfront.net/private-content/private.jpeg?q=!%40%23%24%25%5E&*()=&image-description=aws%27s%20image&%27%27%27=&!()=5";

    expect(signedUrl.slice(0, target.length)).toBe(target);
  });

  // https://github.com/aws/aws-sdk-js-v3/issues/8113
  it("should encode single quotes in filename*=UTF-8'' query values", () => {
    const encodedFilename = encodeURIComponent("文件");
    const urlWithFilename = `https://d111111abcdef8.cloudfront.net/path?response-content-disposition=attachment;filename=test;filename*=UTF-8''${encodedFilename}`;
    const signedUrl = getSignedUrl({
      url: urlWithFilename,
      keyPairId,
      privateKey,
      dateLessThan: "2026-01-01",
    });

    // Single quotes in the query value must be encoded as %27 so the signature
    // matches what CloudFront normalizes the URL to before verification.
    expect(signedUrl).toContain("UTF-8%27%27%E6%96%87%E4%BB%B6");
    expect(signedUrl).not.toContain("UTF-8''");

    // Verify the signature is valid against the policy containing the encoded URL
    const parsedUrl = parseUrl(signedUrl);
    const policyStr = JSON.stringify({
      Statement: [
        {
          Resource: `https://d111111abcdef8.cloudfront.net/path?response-content-disposition=attachment%3Bfilename%3Dtest%3Bfilename*%3DUTF-8%27%27%E6%96%87%E4%BB%B6`,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": Math.round(new Date("2026-01-01").getTime() / 1000),
            },
          },
        },
      ],
    });
    const signatureQueryParam = denormalizeBase64(parsedUrl.query!["Signature"] as string);
    expect(verifySignature(signatureQueryParam, policyStr)).toBeTruthy();
  });
});

describe("SHA-256 algorithm support", () => {
  describe("getSignedUrl with algorithm SHA256", () => {
    it("should include Hash-Algorithm=SHA256 query parameter", () => {
      const signedUrl = getSignedUrl({
        url,
        keyPairId,
        dateLessThan,
        privateKey,
        algorithm: "SHA256",
      });
      const parsed = parseUrl(signedUrl);
      expect(parsed.query?.["Hash-Algorithm"]).toBe("SHA256");
    });

    it("should produce a valid RSA-SHA256 signature", () => {
      const signedUrl = getSignedUrl({
        url,
        keyPairId,
        dateLessThan,
        privateKey,
        algorithm: "SHA256",
      });
      const parsed = parseUrl(signedUrl);
      const signature = denormalizeBase64(parsed.query!["Signature"] as string);

      // Build the expected canned policy
      const expectedPolicy = JSON.stringify({
        Statement: [
          {
            Resource: "https://d111111abcdef8.cloudfront.net/private-content/private.jpeg",
            Condition: { DateLessThan: { "AWS:EpochTime": epochDateLessThan } },
          },
        ],
      });

      const verifier = createVerify("RSA-SHA256");
      verifier.update(expectedPolicy);
      expect(verifier.verify(privateKey, signature, "base64")).toBe(true);
    });

    it("should produce a different signature than SHA1 for the same input", () => {
      const sha1Url = getSignedUrl({ url, keyPairId, dateLessThan, privateKey, algorithm: "SHA1" });
      const sha256Url = getSignedUrl({ url, keyPairId, dateLessThan, privateKey, algorithm: "SHA256" });

      const sha1Sig = parseUrl(sha1Url).query!["Signature"];
      const sha256Sig = parseUrl(sha256Url).query!["Signature"];
      expect(sha1Sig).not.toBe(sha256Sig);
    });

    it("should not include Hash-Algorithm param when algorithm is SHA1 (default)", () => {
      const signedUrl = getSignedUrl({
        url,
        keyPairId,
        dateLessThan,
        privateKey,
      });
      const parsed = parseUrl(signedUrl);
      expect(parsed.query?.["Hash-Algorithm"]).toBeUndefined();
    });

    it("should work with custom policy and SHA256", () => {
      const customPolicy = JSON.stringify({
        Statement: [
          {
            Resource: url,
            Condition: {
              DateLessThan: { "AWS:EpochTime": epochDateLessThan },
              DateGreaterThan: { "AWS:EpochTime": epochDateGreaterThan },
            },
          },
        ],
      });
      const signedUrl = getSignedUrl({
        url,
        keyPairId,
        privateKey,
        policy: customPolicy,
        algorithm: "SHA256",
      });
      const parsed = parseUrl(signedUrl);
      expect(parsed.query?.["Hash-Algorithm"]).toBe("SHA256");
      expect(parsed.query?.["Policy"]).toBeDefined();

      const signature = denormalizeBase64(parsed.query!["Signature"] as string);
      const verifier = createVerify("RSA-SHA256");
      verifier.update(customPolicy);
      expect(verifier.verify(privateKey, signature, "base64")).toBe(true);
    });
  });

  describe("getSignedCookies with algorithm SHA256", () => {
    it("should produce a valid RSA-SHA256 signature in cookies", () => {
      const cookies = getSignedCookies({
        url,
        keyPairId,
        dateLessThan,
        privateKey,
        algorithm: "SHA256",
      });

      const signature = denormalizeBase64(cookies["CloudFront-Signature"]);
      const expectedPolicy = JSON.stringify({
        Statement: [
          {
            Resource: "https://d111111abcdef8.cloudfront.net/private-content/private.jpeg",
            Condition: { DateLessThan: { "AWS:EpochTime": epochDateLessThan } },
          },
        ],
      });

      const verifier = createVerify("RSA-SHA256");
      verifier.update(expectedPolicy);
      expect(verifier.verify(privateKey, signature, "base64")).toBe(true);
      expect(cookies["CloudFront-Hash-Algorithm"]).toBe("SHA256");
    });

    it("should not include CloudFront-Hash-Algorithm when using default SHA1", () => {
      const cookies = getSignedCookies({
        url,
        keyPairId,
        dateLessThan,
        privateKey,
      });
      expect(cookies["CloudFront-Hash-Algorithm"]).toBeUndefined();
    });
  });
});
