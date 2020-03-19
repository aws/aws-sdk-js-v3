import { S3RequestPresigner, S3RequestPresignerOptions } from "./index";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { Hash } from "@aws-sdk/hash-node";
import {
  ALGORITHM_IDENTIFIER,
  SHA256_HEADER,
  ALGORITHM_QUERY_PARAM,
  AMZ_DATE_QUERY_PARAM,
  CREDENTIAL_QUERY_PARAM,
  EXPIRES_QUERY_PARAM,
  HOST_HEADER,
  SIGNED_HEADERS_QUERY_PARAM,
  UNSIGNED_PAYLOAD
} from "./constants";

describe("s3 presigner", () => {
  const s3ResolvedConfig: S3RequestPresignerOptions = {
    credentials: {
      accessKeyId: "akid",
      secretAccessKey: "skey"
    },
    region: "us-bar-1",
    sha256: Hash.bind(null, "sha256"),
    signingName: "s3"
  };
  const expiration = Math.floor(
    (new Date("2000-01-01T00:00:00.000Z").valueOf() + 60 * 60 * 1000) / 1000
  );
  const presigningOptions = {
    signingDate: new Date("2000-01-01T00:00:00.000Z")
  };
  const minimalRequest = new HttpRequest({
    method: "GET",
    protocol: "https:",
    path: "/foo/bar/baz",
    headers: {
      host: "foo.s3.us-bar-1.amazonaws.com"
    },
    hostname: "foo.s3.us-bar-1.amazonaws.com"
  });

  it("should not double uri encode the path", async () => {
    const signer = new S3RequestPresigner(s3ResolvedConfig);
    const signed = await signer.presignRequest(
      minimalRequest,
      expiration,
      presigningOptions
    );
    expect(signed.path).toEqual(minimalRequest.path);
  });

  it("should set the body digest to 'UNSIGNED_PAYLOAD'", async () => {
    const signer = new S3RequestPresigner(s3ResolvedConfig);
    const signed = await signer.presignRequest(
      minimalRequest,
      expiration,
      presigningOptions
    );
    expect(signed.query).toMatchObject({ [SHA256_HEADER]: UNSIGNED_PAYLOAD });
  });

  it("should not change original request", async () => {
    const signer = new S3RequestPresigner(s3ResolvedConfig);
    const originalRequest = { ...minimalRequest };
    const signed = await signer.presignRequest(
      minimalRequest,
      expiration,
      presigningOptions
    );
    expect(signed.query).toMatchObject({
      [SHA256_HEADER]: UNSIGNED_PAYLOAD,
      [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
      [CREDENTIAL_QUERY_PARAM]: "akid/20000101/us-bar-1/s3/aws4_request",
      [AMZ_DATE_QUERY_PARAM]: "20000101T000000Z",
      [EXPIRES_QUERY_PARAM]: "3600",
      [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER
    });
    expect(minimalRequest).toMatchObject(originalRequest);
  });

  it("should not sign content-type header", async () => {
    const signer = new S3RequestPresigner(s3ResolvedConfig);
    const requestWithContentTypeHeader = {
      ...minimalRequest,
      headers: {
        ...minimalRequest.headers,
        "Content-Type": "application/octet-stream"
      }
    };
    const signed = await signer.presignRequest(
      requestWithContentTypeHeader,
      expiration,
      presigningOptions
    );
    expect(signed.query).toMatchObject({
      [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER
    });
  });
});
