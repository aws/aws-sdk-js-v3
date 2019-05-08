import { JsonRpcParser } from "./JsonRpcParser";
import { HttpResponse, OperationModel, BodyParser } from "@aws-sdk/types";
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
  errors: []
};

const response: HttpResponse = {
  statusCode: 200,
  headers: {},
  body: "a string body"
};
const $metadata = extractMetadata(response);

describe("JsonRpcParser", () => {
  it("should pass the operation output and HTTP response body to the body parser", async () => {
    const bodyParser = {
      parse: jest.fn().mockReturnValue({})
    };

    const parser = new JsonRpcParser(
      bodyParser as BodyParser,
      jest.fn(),
      jest.fn(),
      jest.fn()
    );
    const parsed = await parser.parse(operation, response);
    expect(parsed).toEqual({ $metadata });
    expect(bodyParser.parse.mock.calls.length).toBe(1);
    expect(bodyParser.parse.mock.calls[0]).toEqual([
      operation.output,
      "a string body"
    ]);
  });
  it("use an empty string for the body if none is included in the message", async () => {
    const bodyParser = {
      parse: jest.fn().mockReturnValue({})
    };

    const parser = new JsonRpcParser(
      bodyParser as BodyParser,
      jest.fn(),
      jest.fn(),
      jest.fn()
    );
    const responseWithoutBody = {
      ...response,
      body: void 0
    };
    const parsed = await parser.parse(operation, responseWithoutBody);
    const $metadata = extractMetadata(responseWithoutBody);
    expect(parsed).toEqual({ $metadata });
    expect(bodyParser.parse.mock.calls.length).toBe(1);
    expect(bodyParser.parse.mock.calls[0]).toEqual([operation.output, ""]);
  });

  it("should UTF-8 encode ArrayBuffer bodies", async () => {
    const bufferBody = new ArrayBuffer(0);
    const bodyParser = {
      parse: jest.fn().mockReturnValue({})
    };
    const utf8Encoder = jest.fn().mockReturnValue("a string");

    const parser = new JsonRpcParser(
      bodyParser as BodyParser,
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
      operation.output,
      "a string"
    ]);
  });

  it("should UTF-8 encode ArrayBufferView bodies", async () => {
    const bufferBody = new Int32Array(0);
    const bodyParser = {
      parse: jest.fn().mockReturnValue({})
    };
    const utf8Encoder = jest.fn().mockReturnValue("a string");

    const parser = new JsonRpcParser(
      bodyParser as BodyParser,
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
      operation.output,
      "a string"
    ]);
  });

  it("should collect and UTF-8 encode stream bodies", async () => {
    const streamBody = {
      chunks: [new Uint8Array([0xde, 0xad]), new Uint8Array([0xbe, 0xef])]
    };
    const collectedStream = new Uint8Array(0);
    const bodyParser = {
      parse: jest.fn().mockReturnValue({})
    };
    const utf8Encoder = jest.fn().mockReturnValue("a string");
    const streamCollector = jest.fn().mockResolvedValue(collectedStream);

    const parser = new JsonRpcParser<any>(
      bodyParser as BodyParser,
      jest.fn(),
      streamCollector,
      utf8Encoder
    );

    await parser.parse(operation, {
      ...response,
      body: streamBody
    });

    expect(streamCollector.mock.calls.length).toBe(1);
    expect(streamCollector.mock.calls[0][0]).toBe(streamBody);

    expect(utf8Encoder.mock.calls.length).toBe(1);
    expect(utf8Encoder.mock.calls[0][0].buffer).toBe(collectedStream.buffer);

    expect(bodyParser.parse.mock.calls.length).toBe(1);
    expect(bodyParser.parse.mock.calls[0]).toEqual([
      operation.output,
      "a string"
    ]);
  });

  it("should call throw service exception when response code is bigger than 299", async () => {
    const jsonErrorUnmarshaller = jest
      .fn()
      .mockReturnValue(new Error("ServiceException"));
    const bodyParser = {
      parse: jest.fn().mockReturnValue({})
    };
    const parser = new JsonRpcParser(
      bodyParser as BodyParser,
      jsonErrorUnmarshaller,
      jest.fn(),
      jest.fn()
    );
    try {
      const parsed = await parser.parse(operation, {
        ...response,
        statusCode: 400
      });
    } catch (e) {
      expect(e.message).toEqual("ServiceException");
    } finally {
      expect(jsonErrorUnmarshaller).toBeCalled();
      expect(jsonErrorUnmarshaller.mock.calls[0][0]).toEqual(operation);
      expect(jsonErrorUnmarshaller.mock.calls[0][1].body).toEqual(
        "a string body"
      );
      expect(jsonErrorUnmarshaller.mock.calls[0][2]).toEqual(bodyParser);
    }
  });
});
