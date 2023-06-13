import { ProviderError } from "@aws-sdk/property-provider";
import http, { createServer } from "http";
import nock from "nock";

import { httpRequest } from "./httpRequest";

describe("httpRequest", () => {
  const requestSpy = jest.spyOn(http, "request");
  let port: number;
  const hostname = "localhost";
  const path = "/";

  const getOpenPort = async (candidatePort = 4321): Promise<number> => {
    try {
      return new Promise<number>((resolve, reject) => {
        const server = createServer();
        server.on("error", () => reject());
        server.listen(candidatePort);
        server.close(() => resolve(candidatePort));
      });
    } catch (e) {
      return await getOpenPort(candidatePort + 1);
    }
  };

  beforeAll(async () => {
    port = await getOpenPort();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("returns response", () => {
    it("defaults to method GET", async () => {
      const expectedResponse = "expectedResponse";
      const scope = nock(`http://${hostname}:${port}`).get(path).reply(200, expectedResponse);

      const response = await httpRequest({ hostname, path, port });
      expect(response.toString()).toStrictEqual(expectedResponse);
      expect(requestSpy.mock.results[0].value.socket).toHaveProperty("destroyed", true);

      scope.done();
    });

    it("uses method passed in options", async () => {
      const method = "POST";
      const expectedResponse = "expectedResponse";
      const scope = nock(`http://${hostname}:${port}`).post(path).reply(200, expectedResponse);

      const response = await httpRequest({ hostname, path, port, method });
      expect(response.toString()).toStrictEqual(expectedResponse);
      expect(requestSpy.mock.results[0].value.socket).toHaveProperty("destroyed", true);

      scope.done();
    });

    it("works with IPv6 hostname with encapsulated brackets", async () => {
      const expectedResponse = "expectedResponse";
      const encapsulatedIPv6Hostname = "[::1]";
      const scope = nock(`http://${encapsulatedIPv6Hostname}:${port}`).get(path).reply(200, expectedResponse);

      const response = await httpRequest({ hostname: encapsulatedIPv6Hostname, path, port });
      expect(response.toString()).toStrictEqual(expectedResponse);
      expect(requestSpy.mock.results[0].value.socket).toHaveProperty("destroyed", true);

      scope.done();
    });
  });

  describe("throws error", () => {
    const errorOnStatusCode = async (statusCode: number) => {
      it(`statusCode: ${statusCode}`, async () => {
        const scope = nock(`http://${hostname}:${port}`).get(path).reply(statusCode, "continue");

        await expect(httpRequest({ hostname, path, port })).rejects.toStrictEqual(
          Object.assign(new ProviderError("Error response received from instance metadata service"), { statusCode })
        );
        expect(requestSpy.mock.results[0].value.socket).toHaveProperty("destroyed", true);

        scope.done();
      });
    };

    it("when request throws error", async () => {
      const scope = nock(`http://${hostname}:${port}`).get(path).replyWithError("error");

      await expect(httpRequest({ hostname, path, port })).rejects.toStrictEqual(
        new ProviderError("Unable to connect to instance metadata service")
      );
      expect(requestSpy.mock.results[0].value.socket).toHaveProperty("destroyed", true);

      scope.done();
    });

    describe("when request returns with statusCode < 200", () => {
      [100, 101, 103].forEach(errorOnStatusCode);
    });

    describe("when request returns with statusCode >= 300", () => {
      [300, 400, 500].forEach(errorOnStatusCode);
    });
  });

  it("timeout", async () => {
    const timeout = 1000;
    const scope = nock(`http://${hostname}:${port}`)
      .get(path)
      .delay(timeout * 2)
      .reply(200, "expectedResponse");

    await expect(httpRequest({ hostname, path, port, timeout })).rejects.toStrictEqual(
      new ProviderError("TimeoutError from instance metadata service")
    );
    expect(requestSpy.mock.results[0].value.socket).toHaveProperty("destroyed", true);

    nock.abortPendingRequests();
    scope.done();
  });
});
