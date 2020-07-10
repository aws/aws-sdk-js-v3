import * as nock from "nock";
import { httpRequest } from "./httpRequest";

describe("httpRequest", () => {
  const host = "localhost";
  const path = "/";

  describe("returns response", () => {
    it("defaults to method GET", async () => {
      const expectedResponse = "expectedResponse";
      const scope = nock("http://" + host)
        .get(path)
        .reply(200, expectedResponse);

      const response = await httpRequest({ host, path });
      expect(response.toString()).toStrictEqual(expectedResponse);

      scope.done();
    });

    it("uses method passed in options", async () => {
      const method = "POST";
      const expectedResponse = "expectedResponse";
      const scope = nock("http://" + host)
        .post(path)
        .reply(200, expectedResponse);

      const response = await httpRequest({ host, path, method });
      expect(response.toString()).toStrictEqual(expectedResponse);

      scope.done();
    });
  });
});
