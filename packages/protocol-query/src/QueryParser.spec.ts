import { QueryParser } from "./QueryParser";
import { OperationModel, HttpResponse } from "@aws-sdk/types";
import { extractMetadata } from "@aws-sdk/response-metadata-extractor";

const operation: OperationModel = {
  http: {
    method: "GET",
    requestUri: "/"
  },
  name: "test",
  metadata: {
    apiVersion: "2017-06-28",
    endpointPrefix: "foo",
    protocol: "ec2",
    serviceFullName: "AWS Foo Service",
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
  errors: []
};

const response: HttpResponse = {
  statusCode: 200,
  headers: {},
  body: "<OperationRespond>body</OperationRespond>"
};
const $metadata = extractMetadata(response);

describe("QueryUnmarshaller", () => {
  it("should pass the operation output and HTTP response body to the body parser", async () => {
    const bodyParser = {
      parse: jest.fn(() => {
        return {};
      })
    };

    const unmarshaller = new QueryParser(
      bodyParser,
      jest.fn(),
      jest.fn(),
      jest.fn()
    );
    const parsed = await unmarshaller.parse(operation, response);
    expect(parsed).toEqual({ $metadata });
    expect(bodyParser.parse.mock.calls.length).toBe(1);
    expect(bodyParser.parse.mock.calls[0]).toEqual([
      operation.input,
      "<OperationRespond>body</OperationRespond>"
    ]);
  });

  it("should load the requestId from body to metadata", () => {
    async () => {
      const bodyParser = {
        parse: jest.fn(() => {
          return {
            $metadata: {
              requestId: "request-id"
            }
          };
        })
      };
      const unmarshaller = new QueryParser(
        bodyParser,
        jest.fn(),
        jest.fn(),
        jest.fn()
      );
      const parsed = await unmarshaller.parse(operation, response);
      expect(parsed.$metadata.requestId).toEqual("request-id");
      expect(bodyParser.parse.mock.calls.length).toBe(1);
      expect(bodyParser.parse.mock.calls[0]).toEqual([
        operation.input,
        "<OperationRespond>body</OperationRespond>"
      ]);
    };
  });

  it("should use an empty string for the body if none is included in the message", async () => {
    const bodyParser = {
      parse: jest.fn(() => {
        return {};
      })
    };

    const parser = new QueryParser(bodyParser, jest.fn(), jest.fn(), jest.fn());
    const responseWithoutBody = {
      ...response,
      body: void 0
    };
    const parsed = await parser.parse(operation, responseWithoutBody);
    const $metadata = extractMetadata(responseWithoutBody);
    expect(parsed).toEqual({ $metadata });
    expect(bodyParser.parse.mock.calls.length).toBe(1);
    expect(bodyParser.parse.mock.calls[0]).toEqual([operation.input, ""]);
  });

  it("should UTF-8 encode ArrayBuffer bodies", async () => {
    const bufferBody = new ArrayBuffer(0);
    const bodyParser = {
      parse: jest.fn(() => {
        return {};
      })
    };
    const utf8Encoder = jest.fn(() => "<xml></xml>");

    const parser = new QueryParser(
      bodyParser,
      jest.fn(),
      jest.fn(),
      utf8Encoder
    );

    await parser.parse(operation, {
      ...response,
      body: bufferBody
    });

    expect(utf8Encoder.mock.calls.length).toBe(1);
    expect(utf8Encoder.mock.calls[0][0].buffer).toBe(bufferBody);
    expect(bodyParser.parse.mock.calls.length).toBe(1);
    expect(bodyParser.parse.mock.calls[0]).toEqual([
      operation.input,
      "<xml></xml>"
    ]);
  });

  it("should UTF-8 encode ArrayBufferView bodies", async () => {
    const bufferBody = new Int32Array(0);
    const bodyParser = {
      parse: jest.fn(() => {
        return {};
      })
    };
    const utf8Encoder = jest.fn(() => "<xml></xml>");

    const parser = new QueryParser(
      bodyParser,
      jest.fn(),
      jest.fn(),
      utf8Encoder
    );

    await parser.parse(operation, {
      ...response,
      body: bufferBody
    });

    expect(utf8Encoder.mock.calls.length).toBe(1);
    expect(utf8Encoder.mock.calls[0][0].buffer).toBe(bufferBody.buffer);
    expect(bodyParser.parse.mock.calls.length).toBe(1);
    expect(bodyParser.parse.mock.calls[0]).toEqual([
      operation.input,
      "<xml></xml>"
    ]);
  });

  it("should UTF-8 encode streaming bodies", async () => {
    /**
     * A stream type the parser does not understand natively
     */
    class ExternalStream {}

    const bodyParser = {
      parse: jest.fn(() => {
        return {};
      })
    };
    const collector = jest.fn(() => Promise.resolve(new Uint8Array(0)));
    const utf8Encoder = jest.fn(() => "<xml></xml>");

    const parser = new QueryParser<ExternalStream>(
      bodyParser,
      jest.fn(),
      collector,
      utf8Encoder
    );

    await parser.parse(operation, {
      ...response,
      body: new ExternalStream()
    });

    expect(utf8Encoder.mock.calls.length).toBe(1);
    expect(utf8Encoder.mock.calls[0][0]).toMatchObject(new Uint8Array(0));
    expect(collector.mock.calls.length).toBe(1);
    expect(collector.mock.calls[0][0]).toMatchObject(new ExternalStream());
    expect(bodyParser.parse.mock.calls.length).toBe(1);
    expect(bodyParser.parse.mock.calls[0]).toEqual([
      operation.input,
      "<xml></xml>"
    ]);
  });

  it("should call throw service exception when response code is bigger than 299", async () => {
    const bodyParser = {
      parse: jest.fn(() => {
        return {};
      })
    };
    const queryErrorUnmarshaller = jest.fn(() => new Error("ServiceException"));
    const parser = new QueryParser(
      bodyParser,
      queryErrorUnmarshaller,
      jest.fn(),
      jest.fn()
    );
    try {
      const parsed = await parser.parse(operation, {
        ...response,
        statusCode: 500
      });
    } catch (e) {
      expect(e.message).toEqual("ServiceException");
    } finally {
      expect(queryErrorUnmarshaller).toBeCalled();
      expect(queryErrorUnmarshaller.mock.calls[0][0]).toEqual(operation);
      expect(queryErrorUnmarshaller.mock.calls[0][1].body).toEqual(
        "<OperationRespond>body</OperationRespond>"
      );
      expect(queryErrorUnmarshaller.mock.calls[0][2]).toEqual(bodyParser);
    }
  });
});
