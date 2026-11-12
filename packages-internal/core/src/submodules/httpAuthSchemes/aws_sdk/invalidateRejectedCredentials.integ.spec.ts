import { createCredentialRefreshProvider } from "@aws-sdk/core/client";
import { S3 } from "@aws-sdk/client-s3";
import { HttpResponse } from "@smithy/core/protocols";
import type { HttpHandler, HttpRequest } from "@smithy/types";
import { Readable } from "node:stream";
import { describe, expect, test as it, vi } from "vitest";

const EXPIRED_TOKEN = `<?xml version="1.0" encoding="UTF-8"?>
<Error><Code>ExpiredToken</Code><Message>The provided token has expired.</Message><RequestId>1</RequestId></Error>`;
const LIST_BUCKETS = `<?xml version="1.0" encoding="UTF-8"?>
<ListAllMyBucketsResult><Buckets></Buckets></ListAllMyBucketsResult>`;

const handlerResponding = (...responses: [number, string][]) => {
  const signingKeys: (string | undefined)[] = [];
  const handler: HttpHandler = {
    async handle(request: HttpRequest) {
      signingKeys.push(/Credential=([^/]+)\//.exec(request.headers.authorization ?? "")?.[1]);
      const [statusCode, body] = responses[Math.min(signingKeys.length - 1, responses.length - 1)];
      return { response: new HttpResponse({ statusCode, headers: {}, body: Readable.from([body]) }) };
    },
    updateHttpClientConfig() {},
    httpHandlerConfigs: () => ({}),
  };
  return { handler, signingKeys };
};

const refreshingSource = () => {
  let sequence = 0;
  return vi.fn(async () => ({
    accessKeyId: `AKID-${++sequence}`,
    secretAccessKey: "SECRET",
    sessionToken: "TOKEN",
    expiration: new Date(Date.now() + 6 * 3600_000),
  }));
};

describe("invalidation on ExpiredToken", () => {
  it("refreshes the rejected credentials and retries the request with the new ones", async () => {
    const source = refreshingSource();
    const { handler, signingKeys } = handlerResponding([400, EXPIRED_TOKEN], [200, LIST_BUCKETS]);
    const client = new S3({
      region: "us-west-2",
      credentials: createCredentialRefreshProvider(source),
      requestHandler: handler,
    });

    await client.listBuckets();

    expect(signingKeys).toEqual(["AKID-1", "AKID-2"]);
    expect(source).toHaveBeenCalledTimes(2);
  });

  it("does not retry for a customer-written provider, which keeps the existing behavior", async () => {
    const custom = vi.fn(async () => ({ accessKeyId: "CUSTOM", secretAccessKey: "SECRET" }));
    const { handler, signingKeys } = handlerResponding([400, EXPIRED_TOKEN], [200, LIST_BUCKETS]);
    const client = new S3({ region: "us-west-2", credentials: custom, requestHandler: handler });

    await expect(client.listBuckets()).rejects.toMatchObject({ name: "ExpiredToken" });
    expect(signingKeys).toEqual(["CUSTOM"]);
  });
});
