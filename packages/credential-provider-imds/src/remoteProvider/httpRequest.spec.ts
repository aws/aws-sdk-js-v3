import * as nock from "nock";
import { createServer } from "http";
import { httpRequest } from "./httpRequest";
import { ProviderError } from "@aws-sdk/property-provider";

describe("httpRequest", () => {
  let port: number;
  const host = "localhost";
  const path = "/";

  const getOpenPort = async (candidatePort: number = 4321): Promise<number> => {
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

  describe("returns response", () => {
    it("defaults to method GET", async () => {
      const expectedResponse = "expectedResponse";
      const scope = nock(`http://${host}:${port}`)
        .get(path)
        .reply(200, expectedResponse);

      const response = await httpRequest({ host, path, port });
      expect(response.toString()).toStrictEqual(expectedResponse);

      scope.done();
    });

    it("uses method passed in options", async () => {
      const method = "POST";
      const expectedResponse = "expectedResponse";
      const scope = nock(`http://${host}:${port}`)
        .post(path)
        .reply(200, expectedResponse);

      const response = await httpRequest({ host, path, port, method });
      expect(response.toString()).toStrictEqual(expectedResponse);

      scope.done();
    });
  });

  describe("throws error", () => {
    it("when request throws error", async () => {
      const scope = nock(`http://${host}:${port}`)
        .get(path)
        .replyWithError("error");

      await expect(httpRequest({ host, path, port })).rejects.toStrictEqual(
        new ProviderError("Unable to connect to instance metadata service")
      );

      scope.done();
    });
  });
});
