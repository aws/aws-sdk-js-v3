import { jsonErrorUnmarshaller } from "./";
import {
  OperationModel,
  ResolvedHttpResponse,
  ServiceException,
  BodyParser
} from "@aws-sdk/types";

const operation: OperationModel = {
  http: {
    method: "GET",
    requestUri: "/"
  },
  name: "MockOperation",
  metadata: {
    apiVersion: "2017-06-28",
    endpointPrefix: "foo",
    protocol: "json",
    serviceFullName: "AWS Foo Service",
    signatureVersion: "v4",
    uid: "foo-2017-06-28"
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
        required: [],
        members: {
          Message: { shape: { type: "string" } },
          Number: { shape: { type: "integer" } }
        },
        exceptionType: "StructureException"
      }
    },
    {
      shape: {
        type: "structure",
        required: [],
        members: {
          Report: {
            shape: {
              type: "map",
              value: { shape: { type: "string" } },
              key: { shape: { type: "string" } }
            }
          }
        },
        exceptionCode: "MapException"
      }
    }
  ]
};

describe("Json Service Exception Parser", () => {
  const bodyParser = {
    parse: jest.fn().mockReturnValue("ThisIsBody")
  };
  const response: ResolvedHttpResponse = {
    statusCode: 403,
    headers: { "x-amzn-errortype": "StructureException" },
    body: "MockException"
  };
  const exceptionFixture: ServiceException = {
    $metadata: {
      httpStatusCode: response.statusCode,
      httpHeaders: { ...response.headers },
      cfId: undefined,
      extendedRequestId: undefined,
      requestId: undefined
    },
    name: "StructureException",
    message: "",
    details: "ThisIsBody"
  };

  it("should throw exception when no body or header is provided", async function() {
    let badResponse: ResolvedHttpResponse = {
      statusCode: 400,
      headers: {},
      body: ""
    };
    const error = jsonErrorUnmarshaller(
      operation,
      badResponse,
      bodyParser as BodyParser
    );
    expect(error.name).toEqual(`${operation.name}Error`);
    expect(error.message).toBe("");
    expect(error.details).toEqual({});
    expect(error.$metadata.httpStatusCode).toBe(400);
    expect(error.$metadata.httpHeaders).toEqual({});
  });

  it("should parse exception from header", async function() {
    let badResponse: ResolvedHttpResponse = {
      ...response,
      body: ""
    };
    const error = jsonErrorUnmarshaller(
      operation,
      badResponse,
      bodyParser as BodyParser
    );
    expect(error.$metadata.httpHeaders).toEqual(response.headers);
    expect(error.name).toEqual("StructureException");
    expect(bodyParser.parse).toBeCalled();
  });

  it("should parse exception from body", async function() {
    let badResponse: ResolvedHttpResponse = {
      ...response,
      headers: {},
      body: '{"code": "StructureException"}'
    };
    const error = jsonErrorUnmarshaller(
      operation,
      badResponse,
      bodyParser as BodyParser
    );
    expect(error.name).toEqual("StructureException");
    expect(bodyParser.parse).toBeCalled();
  });

  it("should choose right service exception to parse", async function() {
    let badResponse: ResolvedHttpResponse = {
      ...response,
      headers: {},
      body: '{"code": "MapException"}'
    };
    const error = jsonErrorUnmarshaller(
      operation,
      badResponse,
      bodyParser as BodyParser
    );
    expect(error.name).toEqual("MapException");
    expect(bodyParser.parse).toBeCalled();
  });

  it("should infer exception name and message for exceptions not from API", async function() {
    let badResponse: ResolvedHttpResponse = {
      ...response,
      headers: { "x-amzn-errortype": "MockException" },
      body: '{"message": "This Is A MockException"}'
    };
    const error = jsonErrorUnmarshaller(
      operation,
      badResponse,
      bodyParser as BodyParser
    );
    expect(error.name).toEqual("MockException");
    expect(error.message).toEqual("This Is A MockException");
  });

  it("should throw unparsable exception when cannot extract exception", async function() {
    let badResponse: ResolvedHttpResponse = {
      ...response,
      headers: {},
      body: '{"name": "MockException"}'
    };
    const error = jsonErrorUnmarshaller(
      operation,
      badResponse,
      bodyParser as BodyParser
    );
    expect(error.name).toEqual(`${operation.name}Error`);
    expect(bodyParser.parse).toBeCalled();
  });
});
