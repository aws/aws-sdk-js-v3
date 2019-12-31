import { logOperationInfoMiddleware } from "./";
import { InitializeHandlerArguments } from "@aws-sdk/types";

describe("logOperationInfoMiddleware", () => {
  const expectedReturn = {
    fizz: "SECRET",
    buzz: "buzz",
    $metadata: { httpStatusCode: 200 }
  };

  const mockHandler = function (): Promise<any> {
    return Promise.resolve(expectedReturn);
  };

  const minimalOperation = {
    metadata: {
      apiVersion: "2017-09-21",
      endpointPrefix: "foo",
      protocol: "query",
      serviceFullName: "AWS Foo Service",
      signatureVersion: "v4",
      uid: "foo-2017-09-21"
    },
    name: "minimalOperation",
    http: {
      method: "POST",
      requestUri: "/"
    },
    input: {
      shape: {
        type: "structure",
        required: [],
        members: {
          foo: {
            sensitive: true,
            shape: { type: "string" }
          },
          bar: {
            sensitive: false,
            shape: { type: "string" }
          }
        }
      }
    },
    output: {
      shape: {
        type: "structure",
        required: [],
        members: {
          fizz: {
            sensitive: true,
            shape: { type: "string" }
          },
          buzz: {
            sensitive: false,
            shape: { type: "string" }
          }
        }
      }
    },
    errors: []
  };
  let handlerArgs: InitializeHandlerArguments<any> = {
    input: { foo: "CONFIDENTIAL", bar: "bar" }
  };
  let mockLogger: any;
  let composedHandler: any;
  let mockSensitiveDataScrubber = jest.fn(
    () => "params without sensitive information"
  );

  beforeEach(async () => {
    mockLogger = {
      logOperationInfo: true,
      log: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
      info: jest.fn()
    };
    mockSensitiveDataScrubber = jest.fn(
      () => "params without sensitive information"
    );
    composedHandler = logOperationInfoMiddleware(mockHandler, {
      logger: mockLogger,
      model: minimalOperation
    });
  });

  it("should return the operation output to the next handler", async () => {
    expect(await composedHandler(handlerArgs)).toEqual(expectedReturn);
  });

  it("should remove sensitive parameters from the logged output", async () => {
    await composedHandler(handlerArgs);
    expect(mockLogger.log.mock.calls[0][0]).not.toMatch("CONFIDENTIAL");
    expect(mockLogger.log.mock.calls[0][0]).not.toMatch("SECRET");
  });

  it("should log correct stats in right format (with statusCode)", async () => {
    await composedHandler(handlerArgs);
    expect(mockLogger.log.mock.calls[0][0]).toMatch(
      "[AWS Foo Service::minimalOperation 200]"
    );
  });
});
