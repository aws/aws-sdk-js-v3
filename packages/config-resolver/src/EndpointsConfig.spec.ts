import { Endpoint } from "@aws-sdk/types";

import { resolveEndpointsConfig } from "./EndpointsConfig";

describe("EndpointsConfig", () => {
  const region = jest.fn();
  const urlParser = jest.fn();
  const regionInfoProvider = jest.fn();

  const input = { region, urlParser, regionInfoProvider };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("tls", () => {
    [true, false].forEach((tls) => {
      it(`returns input.tls when it's ${tls}`, () => {
        expect(resolveEndpointsConfig({ ...input, tls }).tls).toStrictEqual(tls);
      });
    });

    it("returns true is input.tls is undefined", () => {
      expect(resolveEndpointsConfig({ ...input }).tls).toStrictEqual(true);
    });
  });

  describe("endpoint", () => {
    describe("if defined in input.endpoint", () => {
      const mockEndpoint: Endpoint = { protocol: "protocol", hostname: "hostname", path: "path" };

      it("returns output of urlParser if endpoint if of type string", () => {
        const endpoint = "endpoint";
        urlParser.mockReturnValueOnce(mockEndpoint);
        expect(resolveEndpointsConfig({ ...input, endpoint }).endpoint()).resolves.toBe(mockEndpoint);
        expect(urlParser).toHaveBeenCalledTimes(1);
        expect(urlParser).toHaveBeenCalledWith(endpoint);
      });

      it("returns promisified endpoint if it's of type object", () => {
        const endpoint = mockEndpoint;
        expect(resolveEndpointsConfig({ ...input, endpoint }).endpoint()).resolves.toBe(endpoint);
        expect(urlParser).not.toHaveBeenCalled();
      });

      it("returns endpoint if it's already Provider<Endpoint>", () => {
        const endpoint = () => Promise.resolve(mockEndpoint);
        expect(resolveEndpointsConfig({ ...input, endpoint }).endpoint()).resolves.toBe(mockEndpoint);
        expect(urlParser).not.toHaveBeenCalled();
      });
    });
  });
});
