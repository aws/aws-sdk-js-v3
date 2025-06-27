import { HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { HttpHandlerOptions } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { S3 } from "../../src/S3";

/**
 * Throws an expected exception that contains the serialized request.
 */
class ExpectedRequestSerializationError extends Error {
  constructor(readonly request: HttpRequest) {
    super();
  }
}

class RequestSerializationTestHandler implements HttpHandler {
  async handle(request: HttpRequest, options?: HttpHandlerOptions): Promise<{ response: HttpResponse }> {
    throw new ExpectedRequestSerializationError(request);
  }
  updateHttpClientConfig(key: never, value: never): void {}
  httpHandlerConfigs() {
    return {};
  }
}

describe("Dot Segment in URI Label", () => {
  const client = new S3({
    region: "us-west-2",
    credentials: { accessKeyId: "mockAccessKeyId", secretAccessKey: "mockSecretAccessKey" },
    requestHandler: new RequestSerializationTestHandler(),
  });

  it("S3PreservesLeadingDotSegmentInUriLabel", async () => {
    try {
      await client.getObject({
        Bucket: "mybucket",
        Key: "../key.txt",
      });
      throw new Error("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    } catch (err) {
      if (!(err instanceof ExpectedRequestSerializationError)) {
        throw new Error(err);
      }
      const r = err.request;
      expect(r.method).to.eql("GET");
      expect(r.path).to.eql("/../key.txt");
    }
  });

  it("S3PreservesEmbeddedDotSegmentInUriLabel", async () => {
    try {
      await client.getObject({
        Bucket: "mybucket",
        Key: "foo/../key.txt",
      });
      throw new Error("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    } catch (err) {
      if (!(err instanceof ExpectedRequestSerializationError)) {
        throw new Error(err);
      }
      const r = err.request;
      expect(r.method).to.eql("GET");
      expect(r.path).to.eql("/foo/../key.txt");
    }
  });
});
