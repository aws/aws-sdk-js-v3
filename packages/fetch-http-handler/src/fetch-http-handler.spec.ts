import { AbortController } from "@aws-sdk/abort-controller";
import { HttpRequest } from "@aws-sdk/protocol-http";

import { FetchHttpHandler } from "./fetch-http-handler";
import { requestTimeout } from "./request-timeout";

const mockRequest = jest.fn();
let mockResponse: any;
let timeoutSpy: jest.SpyInstance<any>;

(global as any).Request = mockRequest;
(global as any).Headers = jest.fn();

describe(FetchHttpHandler.name, () => {
  beforeEach(() => {
    (global as any).AbortController = void 0;
    jest.clearAllMocks();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mockResponse = {
      headers: {
        entries: jest.fn().mockReturnValue([
          ["foo", "bar"],
          ["bizz", "bazz"],
        ]),
      },
      arrayBuffer: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllTimers();
    if (timeoutSpy) {
      timeoutSpy.mockRestore();
    }
  });

  it("makes requests using fetch", async () => {
    const mockResponse = {
      headers: {
        entries: jest.fn().mockReturnValue([
          ["foo", "bar"],
          ["bizz", "bazz"],
        ]),
      },
      blob: jest.fn().mockResolvedValue(new Blob(["FOO"])),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);

    (global as any).fetch = mockFetch;
    const fetchHttpHandler = new FetchHttpHandler();

    const response = await fetchHttpHandler.handle({} as any, {});

    expect(mockFetch.mock.calls.length).toBe(1);
    expect(await blobToText(response.response.body)).toBe("FOO");
  });

  it("defaults to response.blob for response.body = null", async () => {
    const mockResponse = {
      body: null,
      headers: {
        entries: jest.fn().mockReturnValue([
          ["foo", "bar"],
          ["bizz", "bazz"],
        ]),
      },
      blob: jest.fn().mockResolvedValue(new Blob(["FOO"])),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);

    (global as any).fetch = mockFetch;
    const fetchHttpHandler = new FetchHttpHandler();

    const response = await fetchHttpHandler.handle({} as any, {});

    expect(mockFetch.mock.calls.length).toBe(1);
    expect(await blobToText(response.response.body)).toBe("FOO");
  });

  it("properly constructs url", async () => {
    const mockResponse = {
      headers: {
        entries: jest.fn().mockReturnValue([
          ["foo", "bar"],
          ["bizz", "bazz"],
        ]),
      },
      blob: jest.fn().mockResolvedValue(new Blob()),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);

    (global as any).fetch = mockFetch;

    const httpRequest = new HttpRequest({
      headers: {},
      hostname: "foo.amazonaws.com",
      method: "GET",
      path: "/test",
      query: { bar: "baz" },
      username: "username",
      password: "password",
      fragment: "fragment",
      protocol: "https:",
      port: 443,
    });
    const fetchHttpHandler = new FetchHttpHandler();

    await fetchHttpHandler.handle(httpRequest, {});

    expect(mockFetch.mock.calls.length).toBe(1);
    const requestCall = mockRequest.mock.calls[0];
    expect(requestCall[0]).toBe("https://username:password@foo.amazonaws.com:443/test?bar=baz#fragment");
  });

  it("will omit body if method is GET", async () => {
    const mockResponse = {
      headers: { entries: jest.fn().mockReturnValue([]) },
      blob: jest.fn().mockResolvedValue(new Blob()),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);

    (global as any).fetch = mockFetch;

    const httpRequest = new HttpRequest({
      headers: {},
      hostname: "foo.amazonaws.com",
      method: "GET",
      path: "/",
      body: "will be omitted",
    });
    const fetchHttpHandler = new FetchHttpHandler();

    await fetchHttpHandler.handle(httpRequest, {});

    expect(mockFetch.mock.calls.length).toBe(1);
    const requestCall = mockRequest.mock.calls[0];
    expect(requestCall[1].body).toBeUndefined();
  });

  it("will omit body if method is HEAD", async () => {
    const mockResponse = {
      headers: { entries: jest.fn().mockReturnValue([]) },
      blob: jest.fn().mockResolvedValue(new Blob()),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);

    (global as any).fetch = mockFetch;

    const httpRequest = new HttpRequest({
      headers: {},
      hostname: "foo.amazonaws.com",
      method: "HEAD",
      path: "/",
      body: "will be omitted",
    });
    const fetchHttpHandler = new FetchHttpHandler();

    await fetchHttpHandler.handle(httpRequest, {});

    expect(mockFetch.mock.calls.length).toBe(1);
    const requestCall = mockRequest.mock.calls[0];
    expect(requestCall[1].body).toBeUndefined();
  });

  it("will not make request if already aborted", async () => {
    const mockResponse = {
      headers: {
        entries: jest.fn().mockReturnValue([
          ["foo", "bar"],
          ["bizz", "bazz"],
        ]),
      },
      blob: jest.fn().mockResolvedValue(new Blob()),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);

    (global as any).fetch = mockFetch;
    const fetchHttpHandler = new FetchHttpHandler();

    await expect(
      fetchHttpHandler.handle({} as any, {
        abortSignal: {
          aborted: true,
          onabort: null,
        },
      })
    ).rejects.toHaveProperty("name", "AbortError");

    expect(mockFetch.mock.calls.length).toBe(0);
  });

  it("will pass abortSignal to fetch if supported", async () => {
    const mockResponse = {
      headers: {
        entries: jest.fn().mockReturnValue([
          ["foo", "bar"],
          ["bizz", "bazz"],
        ]),
      },
      blob: jest.fn().mockResolvedValue(new Blob()),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);
    (global as any).fetch = mockFetch;
    (global as any).AbortController = jest.fn();
    const fetchHttpHandler = new FetchHttpHandler();

    await fetchHttpHandler.handle({} as any, {
      abortSignal: {
        aborted: false,
        onabort: null,
      },
    });

    expect(mockRequest.mock.calls[0][1]).toHaveProperty("signal");
    expect(mockFetch.mock.calls.length).toBe(1);
  });

  it("will pass timeout to request timeout", async () => {
    const mockResponse = {
      headers: {
        entries: jest.fn().mockReturnValue([
          ["foo", "bar"],
          ["bizz", "bazz"],
        ]),
      },
      blob: jest.fn().mockResolvedValue(new Blob()),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);
    (global as any).fetch = mockFetch;

    timeoutSpy = jest.spyOn({ requestTimeout }, "requestTimeout");
    const fetchHttpHandler = new FetchHttpHandler({
      requestTimeout: 500,
    });

    await fetchHttpHandler.handle({} as any, {});

    expect(mockFetch.mock.calls.length).toBe(1);
  });

  it("will pass timeout from a provider to request timeout", async () => {
    const mockResponse = {
      headers: {
        entries: () => [],
      },
      blob: async () => new Blob(),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);
    (global as any).fetch = mockFetch;

    timeoutSpy = jest.spyOn({ requestTimeout }, "requestTimeout");
    const fetchHttpHandler = new FetchHttpHandler(async () => ({
      requestTimeout: 500,
    }));

    await fetchHttpHandler.handle({} as any, {});

    expect(mockFetch.mock.calls.length).toBe(1);
  });

  it("will throw timeout error it timeout finishes before request", async () => {
    const mockFetch = jest.fn(() => {
      return new Promise(() => {});
    });
    (global as any).fetch = mockFetch;
    const fetchHttpHandler = new FetchHttpHandler({
      requestTimeout: 5,
    });

    await expect(fetchHttpHandler.handle({} as any, {})).rejects.toHaveProperty("name", "TimeoutError");
    expect(mockFetch.mock.calls.length).toBe(1);
  });

  it("can be aborted before fetch completes", async () => {
    const abortController = new AbortController();

    const mockFetch = jest.fn(() => {
      return new Promise(() => {});
    });
    (global as any).fetch = mockFetch;

    setTimeout(() => {
      abortController.abort();
    }, 100);
    const fetchHttpHandler = new FetchHttpHandler();

    await expect(
      fetchHttpHandler.handle({} as any, {
        abortSignal: abortController.signal,
      })
    ).rejects.toHaveProperty("name", "AbortError");

    // ensure that fetch's built-in mechanism isn't being used
    expect(mockRequest.mock.calls[0][1]).not.toHaveProperty("signal");
  });

  it("creates correct HTTPResponse object", async () => {
    const mockResponse = {
      headers: {
        entries: jest.fn().mockReturnValue([["foo", "bar"]]),
      },
      blob: jest.fn().mockResolvedValue(new Blob(["FOO"])),
      status: 200,
      statusText: "foo",
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);
    (global as any).fetch = mockFetch;

    const fetchHttpHandler = new FetchHttpHandler();
    const { response } = await fetchHttpHandler.handle({} as any, {});

    expect(mockFetch.mock.calls.length).toBe(1);
    expect(response.headers).toStrictEqual({ foo: "bar" });
    expect(response.reason).toBe("foo");
    expect(response.statusCode).toBe(200);
    expect(await blobToText(response.body)).toBe("FOO");
  });

  describe("#destroy", () => {
    it("should be callable and return nothing", () => {
      const httpHandler = new FetchHttpHandler();
      expect(httpHandler.destroy()).toBeUndefined();
    });
  });

  // The Blob implementation does not implement Blob.text, so we deal with it here.
  async function blobToText(blob: Blob): Promise<string> {
    const reader = new FileReader();

    return new Promise((resolve) => {
      // This fires after the blob has been read/loaded.
      reader.addEventListener("loadend", (e) => {
        const text = e.target!.result as string;
        resolve(text);
      });

      // Start reading the blob as text.
      reader.readAsText(blob);
    });
  }
});
