import { Hash } from "@aws-sdk/hash-node";
import { HttpRequest } from "@aws-sdk/protocol-http";

import {
  ALGORITHM_IDENTIFIER,
  ALGORITHM_QUERY_PARAM,
  AMZ_DATE_QUERY_PARAM,
  CREDENTIAL_QUERY_PARAM,
  EXPIRES_QUERY_PARAM,
  HOST_HEADER,
  SIGNED_HEADERS_QUERY_PARAM,
} from "./constants";
import { PollyPresigner, PollyPresignerOptions } from "./PollyPresigner";

describe("polly presigner", () => {
  const pollyResolvedConfig: PollyPresignerOptions = {
    credentials: {
      accessKeyId: "akid",
      secretAccessKey: "skey",
    },
    region: "us-bar-1",
    sha256: Hash.bind(null, "sha256"),
    signingName: "polly",
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
      host: "foo.polly.us-bar-1.amazonaws.com",
    },
    hostname: "foo.polly.us-bar-1.amazonaws.com",
  });

  it("should not double uri encode the path", async () => {
    const signer = new PollyPresigner(pollyResolvedConfig);
    const signed = await signer.presign(minimalRequest, presigningOptions);
    expect(signed.path).toEqual(minimalRequest.path);
  });

  it("should not change original request", async () => {
    const signer = new PollyPresigner(pollyResolvedConfig);
    const originalRequest = { ...minimalRequest };
    const signed = await signer.presign(minimalRequest, presigningOptions);
    expect(signed.query).toMatchObject({
      [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
      [CREDENTIAL_QUERY_PARAM]: "akid/20000101/us-bar-1/polly/aws4_request",
      [AMZ_DATE_QUERY_PARAM]: "20000101T000000Z",
      [EXPIRES_QUERY_PARAM]: presigningOptions.expiresIn.toString(),
      [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
    });
    expect(minimalRequest).toMatchObject(originalRequest);
  });

  it("should not sign content-type header", async () => {
    const signer = new PollyPresigner(pollyResolvedConfig);
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
    const signer = new PollyPresigner(pollyResolvedConfig);
    const signed = await signer.presign(minimalRequest);
    expect(signed.query).toMatchObject({
      [EXPIRES_QUERY_PARAM]: "900",
    });
  });
});
