import { extractMetadata } from "./";
import { HttpResponse } from "@aws-sdk/protocol-http";

describe("extractMetadata", () => {
  const httpResponseOptions = {
    statusCode: 200,
    headers: {
      Foo: "bar",
      Fizz: "buzz",
      Snap: "crackle, pop"
    },
    body: "this is body"
  };

  it("should extract the status code from responses", () => {
    const response = new HttpResponse(httpResponseOptions);
    expect(extractMetadata(response).httpStatusCode).toBe(response.statusCode);
  });

  it("should extract and downcase headers", () => {
    const response = new HttpResponse(httpResponseOptions);
    expect(extractMetadata(response).httpHeaders).toEqual({
      foo: response.headers.Foo,
      fizz: response.headers.Fizz,
      snap: response.headers.Snap
    });
  });

  it("should extract the request ID from the standard header", () => {
    expect(
      extractMetadata(new HttpResponse({
        ...httpResponseOptions,
        headers: {
          "X-Amz-Request-ID": "id"
        }
      })).requestId
    ).toBe("id");
  });

  it("should extract the request ID from the alternate header", () => {
    expect(
      extractMetadata(new HttpResponse({
        ...httpResponseOptions,
        headers: {
          "X-Amzn-RequestId": "id"
        }
      })).requestId
    ).toBe("id");
  });

  it("should prefer the request ID from the standard header", () => {
    expect(
      extractMetadata(new HttpResponse({
        ...httpResponseOptions,
        headers: {
          "X-Amz-Request-ID": "id",
          "X-Amz-RequestId": "alt_id"
        }
      })).requestId
    ).toBe("id");
  });

  it("should extract the extended request ID from the standard header", () => {
    expect(
      extractMetadata(new HttpResponse({
        ...httpResponseOptions,
        headers: {
          "X-Amz-ID-2": "extendedId"
        }
      })).extendedRequestId
    ).toBe("extendedId");
  });

  it("should extract the CloudFront ID from the standard header", () => {
    expect(
      extractMetadata(new HttpResponse({
        ...httpResponseOptions,
        headers: {
          "X-Amz-CF-ID": "cfId"
        }
      })).cfId
    ).toBe("cfId");
  });
});
