import { describe, expect, test as it } from "vitest";

import { S3 } from "../../src/S3";
import "../../../../packages/signature-v4-crt/src/index";

describe("authSchemePreference", () => {
  const credentials = { accessKeyId: "key", secretAccessKey: "secret" };
  const Bucket = `arn:aws:s3-outposts:us-west-2:123456789012:outpost/op-01234567890123456/accesspoint/abc-111`;
  const Key = "key";
  const Body = "body";

  const SIGNATURE_PREFIX = {
    sigv4: "AWS4-HMAC-SHA256",
    sigv4a: "AWS4-ECDSA-P256-SHA256",
  };

  const interceptorMiddleware = (next, context) => (args) => {
    // middleware intercept the request and return it early
    const request = args.request;
    return Promise.resolve({
      output: {
        $metadata: { attempts: 0, httpStatusCode: 200 },
        request,
        context,
      },
      response: {},
    });
  };

  const getAuthorizationHeader = (headers: Record<string, string>) =>
    headers["authorization"] || headers["Authorization"];

  it.each([
    ["sigv4a", undefined],
    ["sigv4a", ["sigv3"]],
    ["sigv4", ["sigv4"]],
    ["sigv4", ["sigv4", "sigv4a"]],
    ["sigv4a", ["sigv4a"]],
    ["sigv4a", ["sigv4a", "sigv4"]],
  ])("selects '%s' when authSchemePreference: %s", async (output, authSchemePreference) => {
    const client = new S3({ credentials, authSchemePreference });
    client.middlewareStack.add(interceptorMiddleware, { step: "finalizeRequest", priority: "low" });
    const result: any = await client.putObject({ Bucket, Key, Body });

    const authorizationHeader = getAuthorizationHeader(result.request.headers);
    expect(authorizationHeader.startsWith(SIGNATURE_PREFIX[output])).toBe(true);
  });
});
