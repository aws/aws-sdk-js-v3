import {
  parseRequest,
  parseResponse,
  serializeRequest,
  serializeResponse
} from "./";
import { requests } from "./requests.fixture";
import { responses } from "./responses.fixture";
import { HttpRequest, HttpResponse } from "@aws-sdk/types";

describe("parseRequest", () => {
  for (const [serialized, expected] of requests) {
    it(`should parse the request: ${serialized}`, () => {
      expect(parseRequest(serialized)).toEqual(expected);
    });
  }

  it("should reject invalid messages", () => {
    const serialized = `CONNECT 
Host: server.example.com:80 
Proxy-Authorization: basic aGVsbG86d29ybGQ=`;

    expect(() => parseRequest(serialized)).toThrowError(
      "Invalid request string"
    );
  });

  it("should parse multiline headers", () => {
    const serialized = `GET / HTTP/1.1
Host:example.amazonaws.com:80
My-Header1:value1
  value2
     value3
X-Amz-Date:20150830T123600Z`;

    expect(parseRequest(serialized)).toEqual({
      method: "GET",
      path: "/",
      headers: {
        host: "example.amazonaws.com:80",
        "my-header1": "value1,value2,value3",
        "x-amz-date": "20150830T123600Z"
      },
      hostname: "example.amazonaws.com",
      port: 80
    });
  });

  it("should parse duplicate headers", () => {
    const serialized = `GET / HTTP/1.1
Host:example.amazonaws.com
My-Header1:value2
My-Header1:value2
My-Header1:value1
X-Amz-Date:20150830T123600Z`;

    expect(parseRequest(serialized)).toEqual({
      method: "GET",
      path: "/",
      headers: {
        host: "example.amazonaws.com",
        "my-header1": "value2,value2,value1",
        "x-amz-date": "20150830T123600Z"
      },
      hostname: "example.amazonaws.com"
    });
  });

  it("should reject messages with invalid headers", () => {
    const serialized = `CONNECT server.example.com:80 HTTP/1.1 
headerValue
Host: server.example.com:80 
Proxy-Authorization: basic aGVsbG86d29ybGQ=`;

    expect(() => parseRequest(serialized)).toThrowError(
      "Invalid line encountered: headerValue"
    );
  });

  it("should parse absolute URL targets", () => {
    expect(
      parseRequest(
        "GET https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET HTTP/1.1"
      )
    ).toEqual({
      method: "GET",
      protocol: "https:",
      hostname: "developer.mozilla.org",
      path: "/en-US/docs/Web/HTTP/Methods/GET",
      headers: {}
    });
  });
});

describe("parseResponse", () => {
  for (const [serialized, expected] of responses) {
    it(`should parse the response: ${serialized}`, () => {
      expect(parseResponse(serialized)).toEqual(expected);
    });
  }

  it("should reject invalid messages", () => {
    const serialized = `SFTP/1.1 204 No Content`;

    expect(() => parseResponse(serialized)).toThrowError(
      "Invalid response string"
    );
  });
});

describe("serializeRequest", () => {
  it("should serialize requests with string bodies", () => {
    const request: HttpRequest<string> = {
      method: "PUT",
      protocol: "https:",
      path: "/new",
      headers: {
        host: "example.com",
        "content-type": "application/json",
        "content-length": "13"
      },
      body: '{"foo":"bar"}',
      hostname: "example.com"
    };

    expect(serializeRequest(request)).toBe(
      `PUT /new HTTP/1.1\r
host: example.com\r
content-type: application/json\r
content-length: 13\r
\r
{"foo":"bar"}`
    );
  });

  it("should serialize requests without bodies", () => {
    const request: HttpRequest<string> = {
      method: "GET",
      protocol: "https:",
      path: "/",
      headers: {
        host: "example.com"
      },
      hostname: "example.com"
    };

    expect(serializeRequest(request)).toBe(
      `GET / HTTP/1.1\r
host: example.com\r
\r
`
    );
  });

  it("should serialize requests with a placeholder for ArrayBuffer bodies", () => {
    const request: HttpRequest<string> = {
      method: "PUT",
      protocol: "https:",
      path: "/new",
      headers: {
        host: "example.com",
        "content-type": "application/json",
        "content-length": "13"
      },
      body: new ArrayBuffer(13),
      hostname: "example.com"
    };

    expect(serializeRequest(request)).toBe(
      `PUT /new HTTP/1.1\r
host: example.com\r
content-type: application/json\r
content-length: 13\r
\r
[binary payload]`
    );
  });

  it("should serialize requests with a placeholder for ArrayBufferView bodies", () => {
    const request: HttpRequest<string> = {
      method: "PUT",
      protocol: "https:",
      path: "/new",
      headers: {
        host: "example.com",
        "content-type": "application/json",
        "content-length": "13"
      },
      body: new Uint8Array(13),
      hostname: "example.com"
    };

    expect(serializeRequest(request)).toBe(
      `PUT /new HTTP/1.1\r
host: example.com\r
content-type: application/json\r
content-length: 13\r
\r
[binary payload]`
    );
  });

  it("should serialize requests with a placeholder for stream bodies", () => {
    /**
     * An environment specific stream.
     */
    class ExoticStream {}

    const request: HttpRequest<ExoticStream> = {
      method: "PUT",
      protocol: "https:",
      path: "/new",
      headers: {
        host: "example.com",
        "content-type": "application/json",
        "content-length": "13"
      },
      body: new ExoticStream(),
      hostname: "example.com"
    };

    expect(serializeRequest(request)).toBe(
      `PUT /new HTTP/1.1\r
host: example.com\r
content-type: application/json\r
content-length: 13\r
\r
[streaming payload]`
    );
  });
});

describe("serializeResponse", () => {
  it("should serialize responses with string bodies", () => {
    const response: HttpResponse<string> = {
      headers: {
        host: "example.com",
        "content-type": "application/json",
        "content-length": "13"
      },
      body: '{"foo":"bar"}',
      statusCode: 200
    };

    expect(serializeResponse(response)).toBe(
      `HTTP/1.1 200 OK\r
host: example.com\r
content-type: application/json\r
content-length: 13\r
\r
{"foo":"bar"}`
    );
  });

  it("should serialize responses without bodies", () => {
    const response: HttpResponse<string> = {
      headers: {
        host: "example.com"
      },
      statusCode: 204
    };

    expect(serializeResponse(response)).toBe(
      `HTTP/1.1 204 No Content\r
host: example.com\r
\r
`
    );
  });

  it("should serialize responses with a placeholder for ArrayBuffer bodies", () => {
    const response: HttpResponse<string> = {
      headers: {
        host: "example.com",
        "content-type": "application/json",
        "content-length": "13"
      },
      body: new ArrayBuffer(13),
      statusCode: 403
    };

    expect(serializeResponse(response)).toBe(
      `HTTP/1.1 403 Forbidden\r
host: example.com\r
content-type: application/json\r
content-length: 13\r
\r
[binary payload]`
    );
  });

  it("should serialize responses with a placeholder for ArrayBufferView bodies", () => {
    const response: HttpResponse<string> = {
      headers: {
        host: "example.com",
        "content-type": "application/json",
        "content-length": "13"
      },
      body: new Uint8Array(13),
      statusCode: 200
    };

    expect(serializeResponse(response)).toBe(
      `HTTP/1.1 200 OK\r
host: example.com\r
content-type: application/json\r
content-length: 13\r
\r
[binary payload]`
    );
  });

  it("should serialize responses with a placeholder for stream bodies", () => {
    /**
     * An environment specific stream.
     */
    class ExoticStream {}

    const response: HttpResponse<ExoticStream> = {
      headers: {
        host: "example.com",
        "content-type": "application/json",
        "content-length": "13"
      },
      body: new ExoticStream(),
      statusCode: 200
    };

    expect(serializeResponse(response)).toBe(
      `HTTP/1.1 200 OK\r
host: example.com\r
content-type: application/json\r
content-length: 13\r
\r
[streaming payload]`
    );
  });
});
