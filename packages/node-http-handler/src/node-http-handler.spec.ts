import { AbortController } from "@aws-sdk/abort-controller";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { Server as HttpServer } from "http";
import http from "http";
import { Server as HttpsServer } from "https";
import https from "https";
import { AddressInfo } from "net";

import { NodeHttpHandler } from "./node-http-handler";
import { ReadFromBuffers } from "./readable.mock";
import {
  createContinueResponseFunction,
  createMockHttpServer,
  createMockHttpsServer,
  createResponseFunction,
} from "./server.mock";

describe("NodeHttpHandler", () => {
  describe("constructor", () => {
    let hRequestSpy: jest.SpyInstance;
    let hsRequestSpy: jest.SpyInstance;
    const randomMaxSocket = Math.round(Math.random() * 50) + 1;
    const mockRequestImpl = (_options, cb) => {
      cb({
        statusCode: 200,
        body: "body",
        headers: {},
      });
      return new http.ClientRequest(_options);
    };

    beforeEach(() => {
      hRequestSpy = jest.spyOn(http, "request").mockImplementation(mockRequestImpl);
      hsRequestSpy = jest.spyOn(https, "request").mockImplementation(mockRequestImpl);
    });

    afterEach(() => {
      hRequestSpy.mockRestore();
      hsRequestSpy.mockRestore();
    });

    it.each([
      ["empty", undefined],
      ["a provider", async () => {}],
    ])("sets keepAlive=true by default when input is %s", async (_, option) => {
      const nodeHttpHandler = new NodeHttpHandler(option);
      await nodeHttpHandler.handle({} as any);
      expect(hRequestSpy.mock.calls[0][0]?.agent.keepAlive).toEqual(true);
    });

    it.each([
      ["empty", undefined],
      ["a provider", async () => {}],
    ])("sets maxSockets=50 by default when input is %s", async (_, option) => {
      const nodeHttpHandler = new NodeHttpHandler(option);
      await nodeHttpHandler.handle({} as any);
      expect(hRequestSpy.mock.calls[0][0]?.agent.maxSockets).toEqual(50);
    });

    it.each([
      ["an options hash", { httpAgent: new http.Agent({ keepAlive: false, maxSockets: randomMaxSocket }) }],
      [
        "a provider",
        async () => ({
          httpAgent: new http.Agent({ keepAlive: false, maxSockets: randomMaxSocket }),
        }),
      ],
    ])("sets httpAgent when input is %s", async (_, option) => {
      const nodeHttpHandler = new NodeHttpHandler(option);
      await nodeHttpHandler.handle({ protocol: "http:", headers: {}, method: "GET", hostname: "localhost" } as any);
      expect(hRequestSpy.mock.calls[0][0]?.agent.keepAlive).toEqual(false);
      expect(hRequestSpy.mock.calls[0][0]?.agent.maxSockets).toEqual(randomMaxSocket);
    });

    it.each([
      ["an option hash", { httpsAgent: new https.Agent({ keepAlive: true, maxSockets: randomMaxSocket }) }],
      [
        "a provider",
        async () => ({
          httpsAgent: new https.Agent({ keepAlive: true, maxSockets: randomMaxSocket }),
        }),
      ],
    ])("sets httpsAgent when input is %s", async (_, option) => {
      const nodeHttpHandler = new NodeHttpHandler(option);
      await nodeHttpHandler.handle({ protocol: "https:" } as any);
      expect(hsRequestSpy.mock.calls[0][0]?.agent.keepAlive).toEqual(true);
      expect(hsRequestSpy.mock.calls[0][0]?.agent.maxSockets).toEqual(randomMaxSocket);
    });
  });
  describe("http", () => {
    const mockHttpServer: HttpServer = createMockHttpServer().listen(54321);

    afterEach(() => {
      mockHttpServer.removeAllListeners("request");
      mockHttpServer.removeAllListeners("checkContinue");
    });

    afterAll(() => {
      mockHttpServer.close();
    });

    it("has metadata", () => {
      const nodeHttpHandler = new NodeHttpHandler();
      expect(nodeHttpHandler.metadata.handlerProtocol).toContain("http/1.1");
    });

    it("can send http requests", async () => {
      const mockResponse = {
        statusCode: 200,
        headers: {},
        body: "test",
      };
      mockHttpServer.addListener("request", createResponseFunction(mockResponse));
      const nodeHttpHandler = new NodeHttpHandler();

      const { response } = await nodeHttpHandler.handle(
        new HttpRequest({
          hostname: "localhost",
          method: "GET",
          port: (mockHttpServer.address() as AddressInfo).port,
          protocol: "http:",
          path: "/",
          headers: {},
        }),
        {}
      );

      expect(response.statusCode).toEqual(mockResponse.statusCode);
      expect(response.headers).toBeDefined();
      expect(response.headers).toMatchObject(mockResponse.headers);
      expect(response.body).toBeDefined();
    });

    it("can send requests with bodies", async () => {
      const body = Buffer.from("test");
      const mockResponse = {
        statusCode: 200,
        headers: {},
      };
      mockHttpServer.addListener("request", createResponseFunction(mockResponse));
      const spy = jest.spyOn(http, "request").mockImplementationOnce(() => {
        const calls = spy.mock.calls;
        const currentIndex = calls.length - 1;
        return http.request(calls[currentIndex][0], calls[currentIndex][1]);
      });

      const nodeHttpHandler = new NodeHttpHandler();
      const { response } = await nodeHttpHandler.handle(
        new HttpRequest({
          hostname: "localhost",
          method: "PUT",
          port: (mockHttpServer.address() as AddressInfo).port,
          protocol: "http:",
          path: "/",
          headers: {},
          body,
        }),
        {}
      );

      expect(response.statusCode).toEqual(mockResponse.statusCode);
      expect(response.headers).toBeDefined();
      expect(response.headers).toMatchObject(mockResponse.headers);
    });

    it("can handle expect 100-continue", async () => {
      const body = Buffer.from("test");
      const mockResponse = {
        statusCode: 200,
        headers: {},
      };

      mockHttpServer.addListener("checkContinue", createContinueResponseFunction(mockResponse));
      let endSpy: jest.SpyInstance<any>;
      let continueWasTriggered = false;
      const spy = jest.spyOn(http, "request").mockImplementationOnce(() => {
        const calls = spy.mock.calls;
        const currentIndex = calls.length - 1;
        const request = http.request(calls[currentIndex][0], calls[currentIndex][1]);
        request.on("continue", () => {
          continueWasTriggered = true;
        });
        endSpy = jest.spyOn(request, "end");

        return request;
      });

      const nodeHttpHandler = new NodeHttpHandler();
      const { response } = await nodeHttpHandler.handle(
        new HttpRequest({
          hostname: "localhost",
          method: "PUT",
          port: (mockHttpServer.address() as AddressInfo).port,
          protocol: "http:",
          path: "/",
          headers: {
            Expect: "100-continue",
          },
          body,
        }),
        {}
      );

      expect(response.statusCode).toEqual(mockResponse.statusCode);
      expect(response.headers).toBeDefined();
      expect(response.headers).toMatchObject(mockResponse.headers);
      expect(endSpy!.mock.calls.length).toBe(1);
      expect(endSpy!.mock.calls[0][0]).toStrictEqual(body);
      expect(continueWasTriggered).toBe(true);
    });

    it("can send requests with streaming bodies", async () => {
      const body = new ReadFromBuffers({
        buffers: [Buffer.from("t"), Buffer.from("e"), Buffer.from("s"), Buffer.from("t")],
      });
      const inputBodySpy = jest.spyOn(body, "pipe");
      const mockResponse = {
        statusCode: 200,
        headers: {},
      };
      mockHttpServer.addListener("request", createResponseFunction(mockResponse));
      const nodeHttpHandler = new NodeHttpHandler();

      const { response } = await nodeHttpHandler.handle(
        new HttpRequest({
          hostname: "localhost",
          method: "PUT",
          port: (mockHttpServer.address() as AddressInfo).port,
          protocol: "http:",
          path: "/",
          headers: {},
          body,
        }),
        {}
      );

      expect(response.statusCode).toEqual(mockResponse.statusCode);
      expect(response.headers).toBeDefined();
      expect(response.headers).toMatchObject(mockResponse.headers);
      expect(inputBodySpy.mock.calls.length).toBeTruthy();
    });

    it("can send requests with Uint8Array bodies", async () => {
      const body = Buffer.from([0, 1, 2, 3]);
      const mockResponse = {
        statusCode: 200,
        headers: {},
      };
      mockHttpServer.addListener("request", createResponseFunction(mockResponse));
      let endSpy: jest.SpyInstance<any>;
      const spy = jest.spyOn(http, "request").mockImplementationOnce(() => {
        const calls = spy.mock.calls;
        const currentIndex = calls.length - 1;
        const request = http.request(calls[currentIndex][0], calls[currentIndex][1]);
        endSpy = jest.spyOn(request, "end");
        return request;
      });

      const nodeHttpHandler = new NodeHttpHandler();
      const { response } = await nodeHttpHandler.handle(
        new HttpRequest({
          hostname: "localhost",
          method: "PUT",
          port: (mockHttpServer.address() as AddressInfo).port,
          protocol: "http:",
          path: "/",
          headers: {},
          body,
        }),
        {}
      );

      expect(response.statusCode).toEqual(mockResponse.statusCode);
      expect(response.headers).toBeDefined();
      expect(response.headers).toMatchObject(mockResponse.headers);
      expect(endSpy!.mock.calls.length).toBe(1);
      expect(endSpy!.mock.calls[0][0]).toStrictEqual(body);
    });
  });

  describe("https", () => {
    const mockHttpsServer: HttpsServer = createMockHttpsServer().listen(54322);

    /*beforeEach(() => {
      // Setting the NODE_TLS_REJECT_UNAUTHORIZED will allow the unconfigurable
      // HTTPS client in getCertificate to skip cert validation, which the
      // self-signed cert used for this test's server would fail. The variable
      // will be reset to its original value at the end of the test.
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    });*/

    afterEach(() => {
      mockHttpsServer.removeAllListeners("request");
      mockHttpsServer.removeAllListeners("checkContinue");
      //process.env.NODE_TLS_REJECT_UNAUTHORIZED = rejectUnauthorizedEnv;
    });

    afterAll(() => {
      mockHttpsServer.close();
    });
    /*it("can send https requests", async () => {
      const mockResponse = {
        statusCode: 200,
        headers: {},
        body: "test"
      };
      mockHttpsServer.addListener(
        "request",
        createResponseFunction(mockResponse)
      );
      const nodeHttpHandler = new NodeHttpHandler();

      let { response } = await nodeHttpHandler.handle(
        new HttpRequest({
          hostname: "localhost",
          method: "GET",
          port: (mockHttpsServer.address() as AddressInfo).port,
          protocol: "https:",
          path: "/",
          headers: {}
        }),
        {}
      );

      expect(response.statusCode).toEqual(mockResponse.statusCode);
      expect(response.headers).toBeDefined();
      expect(response.headers).toMatchObject(mockResponse.headers);
      expect(response.body).toBeDefined();
    });

    it("can send requests with bodies", async () => {
      const body = Buffer.from("test");
      const mockResponse = {
        statusCode: 200,
        headers: {}
      };
      mockHttpsServer.addListener(
        "request",
        createResponseFunction(mockResponse)
      );
      const spy = jest.spyOn(https, "request").mockImplementationOnce(() => {
        let calls = spy.mock.calls;
        let currentIndex = calls.length - 1;
        return https.request(calls[currentIndex][0], calls[currentIndex][1]);
      });

      const nodeHttpHandler = new NodeHttpHandler();
      let { response } = await nodeHttpHandler.handle(
        new HttpRequest({
          hostname: "localhost",
          method: "PUT",
          port: (mockHttpsServer.address() as AddressInfo).port,
          protocol: "https:",
          path: "/",
          headers: {},
          body
        }),
        {}
      );

      expect(response.statusCode).toEqual(mockResponse.statusCode);
      expect(response.headers).toBeDefined();
      expect(response.headers).toMatchObject(mockResponse.headers);
    });

    it("can handle expect 100-continue", async () => {
      const body = Buffer.from("test");
      const mockResponse = {
        statusCode: 200,
        headers: {}
      };

      mockHttpsServer.addListener(
        "checkContinue",
        createContinueResponseFunction(mockResponse)
      );
      let endSpy: jest.SpyInstance<any>;
      let continueWasTriggered = false;
      const spy = jest.spyOn(https, "request").mockImplementationOnce(() => {
        let calls = spy.mock.calls;
        let currentIndex = calls.length - 1;
        const request = https.request(
          calls[currentIndex][0],
          calls[currentIndex][1]
        );
        request.on("continue", () => {
          continueWasTriggered = true;
        });
        endSpy = jest.spyOn(request, "end");

        return request;
      });

      const nodeHttpHandler = new NodeHttpHandler();
      let response = await nodeHttpHandler.handle(
        {
          hostname: "localhost",
          method: "PUT",
          port: (mockHttpServer.address() as AddressInfo).port,
          protocol: "https:",
          path: "/",
          headers: {
            Expect: "100-continue"
          },
          body
        },
        {}
      );

      expect(response.statusCode).toEqual(mockResponse.statusCode);
      expect(response.headers).toBeDefined();
      expect(response.headers).toMatchObject(mockResponse.headers);
      expect(endSpy!.mock.calls.length).toBe(1);
      expect(endSpy!.mock.calls[0][0]).toBe(body);
      expect(continueWasTriggered).toBe(true);
    });

    it("can send requests with streaming bodies", async () => {
      const body = new ReadFromBuffers({
        buffers: [
          Buffer.from("t"),
          Buffer.from("e"),
          Buffer.from("s"),
          Buffer.from("t")
        ]
      });
      let inputBodySpy = jest.spyOn(body, "pipe");
      const mockResponse = {
        statusCode: 200,
        headers: {}
      };
      mockHttpsServer.addListener(
        "request",
        createResponseFunction(mockResponse)
      );
      const nodeHttpHandler = new NodeHttpHandler();

      let { response } = await nodeHttpHandler.handle(
        new HttpRequest({
          hostname: "localhost",
          method: "PUT",
          port: (mockHttpsServer.address() as AddressInfo).port,
          protocol: "https:",
          path: "/",
          headers: {},
          body
        }),
        {}
      );

      expect(response.statusCode).toEqual(mockResponse.statusCode);
      expect(response.headers).toBeDefined();
      expect(response.headers).toMatchObject(mockResponse.headers);
      expect(inputBodySpy.mock.calls.length).toBeTruthy();
    });*/

    it("rejects if the request encounters an error", async () => {
      const mockResponse = {
        statusCode: 200,
        headers: {},
        body: "test",
      };
      mockHttpsServer.addListener("request", createResponseFunction(mockResponse));
      const nodeHttpHandler = new NodeHttpHandler();

      await expect(
        nodeHttpHandler.handle(
          new HttpRequest({
            hostname: "localhost",
            method: "GET",
            port: (mockHttpsServer.address() as AddressInfo).port,
            protocol: "fake:", // trigger a request error
            path: "/",
            headers: {},
          }),
          {}
        )
      ).rejects.toHaveProperty("message");
    });

    it("will not make request if already aborted", async () => {
      const mockResponse = {
        statusCode: 200,
        headers: {},
        body: "test",
      };
      mockHttpsServer.addListener("request", createResponseFunction(mockResponse));
      const spy = jest.spyOn(https, "request").mockImplementationOnce(() => {
        const calls = spy.mock.calls;
        const currentIndex = calls.length - 1;
        return https.request(calls[currentIndex][0], calls[currentIndex][1]);
      });
      // clear data held from previous tests
      spy.mockClear();
      const nodeHttpHandler = new NodeHttpHandler();

      await expect(
        nodeHttpHandler.handle(
          new HttpRequest({
            hostname: "localhost",
            method: "GET",
            port: (mockHttpsServer.address() as AddressInfo).port,
            protocol: "https:",
            path: "/",
            headers: {},
          }),
          {
            abortSignal: {
              aborted: true,
              onabort: null,
            },
          }
        )
      ).rejects.toHaveProperty("name", "AbortError");

      expect(spy.mock.calls.length).toBe(0);
    });

    it("will destroy the request when aborted", async () => {
      const mockResponse = {
        statusCode: 200,
        headers: {},
        body: "test",
      };
      mockHttpsServer.addListener("request", createResponseFunction(mockResponse));
      let httpRequest: http.ClientRequest;
      let reqAbortSpy: any;
      const spy = jest.spyOn(https, "request").mockImplementationOnce(() => {
        const calls = spy.mock.calls;
        const currentIndex = calls.length - 1;
        httpRequest = https.request(calls[currentIndex][0], calls[currentIndex][1]);
        reqAbortSpy = jest.spyOn(httpRequest, "abort");
        return httpRequest;
      });
      const nodeHttpHandler = new NodeHttpHandler();
      const abortController = new AbortController();

      setTimeout(() => {
        abortController.abort();
      }, 0);

      await expect(
        nodeHttpHandler.handle(
          new HttpRequest({
            hostname: "localhost",
            method: "GET",
            port: (mockHttpsServer.address() as AddressInfo).port,
            protocol: "https:",
            path: "/",
            headers: {},
          }),
          {
            abortSignal: abortController.signal,
          }
        )
      ).rejects.toHaveProperty("name", "AbortError");

      expect(reqAbortSpy.mock.calls.length).toBe(1);
    });
  });

  describe("#destroy", () => {
    it("should be callable and return nothing", () => {
      const nodeHttpHandler = new NodeHttpHandler();
      expect(nodeHttpHandler.destroy()).toBeUndefined();
    });
  });
});
