import { loadConfig } from "@aws-sdk/node-config-provider";
import { parseUrl } from "@aws-sdk/url-parser";

import { Endpoint } from "../config/Endpoint";
import { ENDPOINT_CONFIG_OPTIONS } from "../config/EndpointConfigOptions";
import { EndpointMode } from "../config/EndpointMode";
import { ENDPOINT_MODE_CONFIG_OPTIONS } from "../config/EndpointModeConfigOptions";
import { getInstanceMetadataEndpoint } from "./getInstanceMetadataEndpoint";

jest.mock("@aws-sdk/node-config-provider");
jest.mock("@aws-sdk/url-parser");

describe(getInstanceMetadataEndpoint.name, () => {
  let mockURL: string;
  const mockEndpoint = { protocol: "http:", hostname: "localhost", port: "80" };

  beforeEach(() => {
    (parseUrl as jest.Mock).mockReturnValue(mockEndpoint);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("when endpoint is defined", () => {
    afterEach(() => {
      expect(loadConfig).toHaveBeenCalledTimes(1);
      expect(loadConfig).toHaveBeenCalledWith(ENDPOINT_CONFIG_OPTIONS);
      expect(parseUrl).toHaveBeenCalledTimes(1);
      expect(parseUrl).toHaveBeenCalledWith(mockURL);
    });

    it("throws error when endpoint is invalid", () => {
      mockURL = "invalid_endpoint";
      const mockError = new Error(`Invalid endpoint: ${mockURL}`);
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.resolve(mockURL));
      (parseUrl as jest.Mock).mockImplementation(() => {
        throw mockError;
      });
      return expect(getInstanceMetadataEndpoint()).rejects.toThrow(mockError);
    });

    describe("returns host when endpoint is valid", () => {
      const mockProtocol = "http:";
      const mockHostname = "127.0.0.1";

      it("with port", async () => {
        const mockPort = 80;
        mockURL = `${mockProtocol}://${mockHostname}:${mockPort}`;
        (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.resolve(mockURL));
        expect(await getInstanceMetadataEndpoint()).toStrictEqual(mockEndpoint);
      });

      it("without port", async () => {
        mockURL = `${mockProtocol}://${mockHostname}`;
        (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.resolve(mockURL));
        expect(await getInstanceMetadataEndpoint()).toStrictEqual(mockEndpoint);
      });
    });
  });

  describe("when endpoint is not defined", () => {
    beforeEach(() => {
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.resolve(undefined));
    });

    afterEach(() => {
      expect(loadConfig).toHaveBeenCalledTimes(2);
      expect(loadConfig).toHaveBeenNthCalledWith(1, ENDPOINT_CONFIG_OPTIONS);
      expect(loadConfig).toHaveBeenNthCalledWith(2, ENDPOINT_MODE_CONFIG_OPTIONS);
    });

    it.each([
      [Endpoint.IPv4, EndpointMode.IPv4],
      [Endpoint.IPv6, EndpointMode.IPv6],
    ])("returns %s when endpointMode=%s", async (endpoint, endpointMode) => {
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.resolve(endpointMode));
      expect(await getInstanceMetadataEndpoint()).toEqual(mockEndpoint);
      expect(parseUrl).toHaveBeenCalledTimes(1);
      expect(parseUrl).toHaveBeenCalledWith(endpoint);
    });

    it(`throws Error when endpointMode is unsupported`, () => {
      const unsupportedEndpointMode = "unsupportedEndpointMode";
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.resolve(unsupportedEndpointMode));
      return expect(getInstanceMetadataEndpoint()).rejects.toThrowError(
        `Unsupported endpoint mode: ${unsupportedEndpointMode}.` + ` Select from ${Object.values(EndpointMode)}`
      );
    });

    it(`rethrows Error when reading endpointMode throws error`, () => {
      const error = new Error("error");
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.reject(error));
      return expect(getInstanceMetadataEndpoint()).rejects.toThrow(error);
    });
  });

  describe("when reading endpoint throws error", () => {
    it("rethrows error", () => {
      const error = new Error("error");
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.reject(error));
      expect(getInstanceMetadataEndpoint()).rejects.toThrow(error);
      expect(loadConfig).toHaveBeenCalledTimes(1);
      expect(loadConfig).toHaveBeenCalledWith(ENDPOINT_CONFIG_OPTIONS);
    });
  });
});
