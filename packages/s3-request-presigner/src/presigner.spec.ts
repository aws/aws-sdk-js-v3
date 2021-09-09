import { Hash } from "@aws-sdk/hash-node";
import { HttpRequest } from "@aws-sdk/protocol-http";

import {
  ALGORITHM_IDENTIFIER,
  ALGORITHM_QUERY_PARAM,
  AMZ_DATE_QUERY_PARAM,
  CREDENTIAL_QUERY_PARAM,
  EXPIRES_QUERY_PARAM,
  HOST_HEADER,
  SHA256_HEADER,
  SIGNED_HEADERS_QUERY_PARAM,
  UNSIGNED_PAYLOAD,
} from "./constants";
import { S3RequestPresigner, S3RequestPresignerOptions } from "./presigner";

describe("s3 presigner", () => {
  const s3ResolvedConfig: S3RequestPresignerOptions = {
    credentials: {
      accessKeyId: "akid",
      secretAccessKey: "skey",
    },
    region: "us-bar-1",
    sha256: Hash.bind(null, "sha256"),
    signingName: "s3",
  };
  const presigningOptions = {
    expiresIn: 1800,
    signingDate: new Date("2000-01-01T00:00:00.000Z"),
  };
  const minimalRequest = new HttpRequest({
    method: "GET",
    protocol: "https:",
    path: "/foo/bar/baz",
    headers: {
      host: "foo.s3.us-bar-1.amazonaws.com",
    },
    hostname: "foo.s3.us-bar-1.amazonaws.com",
  });

  it("should not double uri encode the path", async () => {
    const signer = new S3RequestPresigner(s3ResolvedConfig);
    const signed = await signer.presign(minimalRequest, presigningOptions);
    expect(signed.path).toEqual(minimalRequest.path);
  });

  it("should set the body digest to 'UNSIGNED_PAYLOAD'", async () => {
    const signer = new S3RequestPresigner(s3ResolvedConfig);
    const signed = await signer.presign(minimalRequest, presigningOptions);
    expect(signed.query).toMatchObject({ [SHA256_HEADER]: UNSIGNED_PAYLOAD });
  });

  it("should not change original request", async () => {
    const signer = new S3RequestPresigner(s3ResolvedConfig);
    const originalRequest = { ...minimalRequest };
    const signed = await signer.presign(minimalRequest, presigningOptions);
    expect(signed.query).toMatchObject({
      [SHA256_HEADER]: UNSIGNED_PAYLOAD,
      [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
      [CREDENTIAL_QUERY_PARAM]: "akid/20000101/us-bar-1/s3/aws4_request",
      [AMZ_DATE_QUERY_PARAM]: "20000101T000000Z",
      [EXPIRES_QUERY_PARAM]: presigningOptions.expiresIn.toString(),
      [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
    });
    expect(minimalRequest).toMatchObject(originalRequest);
  });

  it("should not sign content-type header", async () => {
    const signer = new S3RequestPresigner(s3ResolvedConfig);
    const requestWithContentTypeHeader = {
      ...minimalRequest,
      headers: {
        ...minimalRequest.headers,
        "Content-Type": "application/octet-stream",
      },
    };
    const signed = await signer.presign(requestWithContentTypeHeader, presigningOptions);
    expect(signed.query).toMatchObject({
      [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
    });
  });

  it("should default expiresIn to 900 seconds if not explicitly passed", async () => {
    const signer = new S3RequestPresigner(s3ResolvedConfig);
    const signed = await signer.presign(minimalRequest);
    expect(signed.query).toMatchObject({
      [EXPIRES_QUERY_PARAM]: "900",
    });
  });

  it("should disable hoisting server-side-encryption headers to query", async () => {
    const signer = new S3RequestPresigner(s3ResolvedConfig);
    const signed = await signer.presign({
      ...minimalRequest,
      headers: {
        ...minimalRequest.headers,
        "x-amz-server-side-encryption": "kms",
        "x-amz-server-side-encryption-customer-algorithm": "AES256",
      },
    });
    expect(signed.headers).toMatchObject({
      "x-amz-server-side-encryption": "kms",
    });
    const signedHeadersHeader = signed.query?.["X-Amz-SignedHeaders"];
    const signedHeaders =
      typeof signedHeadersHeader === "string" ? signedHeadersHeader.split(";") : signedHeadersHeader;
    expect(signedHeaders).toContain("x-amz-server-side-encryption");
    expect(signedHeaders).toContain("x-amz-server-side-encryption-customer-algorithm");
  });

  it("should inject host header with port if not supplied", async () => {
    const signer = new S3RequestPresigner(s3ResolvedConfig);
    const port = 12345;
    const signed = await signer.presign({ ...minimalRequest, headers: {}, port });
    expect(signed.headers).toMatchObject({
      host: `${minimalRequest.hostname}:${port}`,
    });
  });
});
