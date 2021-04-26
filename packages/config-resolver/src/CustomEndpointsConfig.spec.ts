import { Endpoint } from "@aws-sdk/types";

import { resolveCustomEndpointsConfig } from "./CustomEndpointsConfig";

describe("CustomEndpointsConfig", () => {
  const urlParser = jest.fn();

  const input = { urlParser };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("endpoint", () => {
    const mockEndpoint: Endpoint = { protocol: "protocol", hostname: "hostname", path: "path" };

    it("returns output of urlParser if endpoint is of type string", async () => {
      const endpoint = "endpoint";
      urlParser.mockReturnValueOnce(mockEndpoint);
      const { endpoint: endpointProvider, isCustomEndpoint } = resolveCustomEndpointsConfig({ ...input, endpoint });
      expect(isCustomEndpoint).toBe(true);
      const endpointOutput = await endpointProvider();
      expect(endpointOutput).toStrictEqual(mockEndpoint);
      expect(urlParser).toHaveBeenCalledTimes(1);
      expect(urlParser).toHaveBeenCalledWith(endpoint);
    });

    it("returns promisified endpoint if it's of type object", async () => {
      const endpoint = mockEndpoint;
      const { endpoint: endpointProvider, isCustomEndpoint } = resolveCustomEndpointsConfig({ ...input, endpoint });
      expect(isCustomEndpoint).toBe(true);
      const endpointOutput = await endpointProvider();
      expect(endpointOutput).toStrictEqual(endpoint);
      expect(urlParser).not.toHaveBeenCalled();
    });

    it("returns endpoint if it's already Provider<Endpoint>", async () => {
      const endpoint = () => Promise.resolve(mockEndpoint);
      const { endpoint: endpointProvider, isCustomEndpoint } = resolveCustomEndpointsConfig({ ...input, endpoint });
      expect(isCustomEndpoint).toBe(true);
      const endpointOutput = await endpointProvider();
      expect(endpointOutput).toStrictEqual(mockEndpoint);
      expect(urlParser).not.toHaveBeenCalled();
    });
  });

  describe("tls", () => {
    const endpoint = "endpoint";

    beforeEach(() => {
      urlParser.mockReturnValueOnce({ protocol: "protocol", hostname: "hostname", path: "path" });
    });

    [true, false].forEach((tls) => {
      it(`returns input.tls when it's ${tls}`, () => {
        expect(resolveCustomEndpointsConfig({ ...input, endpoint, tls }).tls).toStrictEqual(tls);
      });
    });

    it("returns true is input.tls is undefined", () => {
      expect(resolveCustomEndpointsConfig({ ...input, endpoint }).tls).toStrictEqual(true);
    });
  });
});
