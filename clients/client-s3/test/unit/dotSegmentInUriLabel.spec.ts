/// <reference types="mocha" />
import { HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { HttpHandlerOptions } from "@smithy/types";
import { S3 } from "../../src/S3";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);
const { expect } = chai;

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
    credentials: { accessKeyId: "mockAccessKeyId", secretAccessKey: "mockSecretAccessKey" },
    requestHandler: new RequestSerializationTestHandler(),
  });

  it("S3PreservesLeadingDotSegmentInUriLabel", async () => {
    try {
      await client.getObject({
        Bucket: "mybucket",
        Key: "../key.txt",
      });
      fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    } catch (err) {
      if (!(err instanceof ExpectedRequestSerializationError)) {
        fail(err);
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
      fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    } catch (err) {
      if (!(err instanceof ExpectedRequestSerializationError)) {
        fail(err);
      }
      const r = err.request;
      expect(r.method).to.eql("GET");
      expect(r.path).to.eql("/foo/../key.txt");
    }
  });
});
