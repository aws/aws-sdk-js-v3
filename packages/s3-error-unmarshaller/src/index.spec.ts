import {
  OperationModel,
  ResolvedHttpResponse,
  Member,
  Structure,
  BodyParser
} from "@aws-sdk/types";
import { s3ErrorUnmarshaller } from "./index";

describe("XML protocol Error Unmarshaller", () => {
  const minimalOperation: OperationModel = {
    http: {
      method: "GET",
      requestUri: "/"
    },
    name: "MockOperation",
    metadata: {
      apiVersion: "2017-06-28",
      endpointPrefix: "foo",
      protocol: "rest-xml",
      serviceFullName: "AWS S3 Service",
      signatureVersion: "v4",
      uid: "foo-2017-09-22"
    },
    input: {
      shape: {
        type: "structure",
        required: [],
        members: {}
      }
    },
    output: {
      shape: {
        type: "structure",
        required: [],
        members: {}
      }
    },
    errors: [
      {
        shape: {
          type: "structure",
          required: ["Type"],
          members: {
            Type: { shape: { type: "string" } }
          },
          exceptionType: "ConfigurationSetDoesNotExist"
        }
      }
    ]
  };
  let errorResponse: ResolvedHttpResponse;
  let operation: OperationModel;
  beforeEach(() => {
    operation = minimalOperation;
    errorResponse = {
      statusCode: 400,
      headers: {},
      body: `<Error>
        <Code>ConfigurationSetDoesNotExist</Code>
        <Message>Configuration set does not exist.</Message>
        <Type>Sender</Type>
        <RequestId>request-Id</RequestId>
      </Error>`
    };
  });

  it("should correctly parse error name and message that are not modeled in API", async () => {
    const bodyParser = {
      parse: jest
        .fn(() => {})
        .mockImplementationOnce(() => {
          //output for parsing error code
          return {
            Code: "ConfigurationSetDoesNotExist",
            Message: "Configuration set does not exist.",
            $metadata: { requestId: "request-Id" }
          };
        })
        .mockImplementationOnce(() => {
          //output for parsing error owned properties
          return {
            Type: "Sender",
            $metadata: { requestId: "request-Id" }
          };
        })
    };
    const error = s3ErrorUnmarshaller(
      operation,
      errorResponse,
      bodyParser as BodyParser
    );
    expect(bodyParser.parse.mock.calls.length).toBe(
      operation.errors.length + 1
    );
    expect(error.name).toEqual("ConfigurationSetDoesNotExist");
    expect(error.message).toEqual("Configuration set does not exist.");
    expect(error.$metadata.requestId).toEqual("request-Id");
    expect(error.details).toEqual({ Type: "Sender" });
  });

  it("should parse unknown type of exception", async () => {
    const bodyParser = {
      parse: jest
        .fn()
        .mockReturnValue({ $metadata: { requestId: "request-Id" } })
    };
    const unknownResponse: ResolvedHttpResponse = {
      ...errorResponse,
      body: "<UnknownOperationException/>"
    };
    const error = s3ErrorUnmarshaller(
      operation,
      unknownResponse,
      bodyParser as BodyParser
    );
    expect(error.name).toEqual(`${operation.name}Error`);
  });

  it("should parse parsable errors not modeled in API", async () => {
    const errorsOwnPropertiesOutput = jest.fn();
    const bodyParser = {
      parse: jest.fn((error: Member, _) => {
        if ((error.shape as Structure).members.Code) {
          //output for parsing error code
          return {
            Code: "ValidationException",
            Message: "parameter ID is not correct.",
            $metadata: { requestId: "request-Id" }
          };
        } else {
          //output for parsing error owned properties
          errorsOwnPropertiesOutput();
        }
      })
    };
    const error = s3ErrorUnmarshaller(
      operation,
      errorResponse,
      bodyParser as BodyParser
    );
    expect(bodyParser.parse.mock.calls.length).toBe(1);
    expect(errorsOwnPropertiesOutput.mock.calls.length).toBe(0);
    expect(error.name).toEqual("ValidationException");
    expect(error.message).toEqual("parameter ID is not correct.");
    expect(error.$metadata.requestId).toEqual("request-Id");
  });
});
