import { loadConfig } from "@aws-sdk/node-config-provider";
import { parseUrl } from "@aws-sdk/url-parser";

import { Endpoint } from "./config/Endpoint";
import { ENDPOINT_CONFIG_OPTIONS } from "./config/EndpointConfigOptions";
import { EndpointMode } from "./config/EndpointMode";
import { ENDPOINT_MODE_CONFIG_OPTIONS } from "./config/EndpointModeConfigOptions";
import { getInstanceMetadataHost } from "./getInstanceMetadataHost";

jest.mock("@aws-sdk/node-config-provider");
jest.mock("@aws-sdk/url-parser");

describe(getInstanceMetadataHost.name, () => {
  let mockEndpoint: string;
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("when endpoint is defined", () => {
    afterEach(() => {
      expect(loadConfig).toHaveBeenCalledTimes(1);
      expect(loadConfig).toHaveBeenCalledWith(ENDPOINT_CONFIG_OPTIONS);
      expect(parseUrl).toHaveBeenCalledTimes(1);
      expect(parseUrl).toHaveBeenCalledWith(mockEndpoint);
    });

    it("throws error when endpoint is invalid", () => {
      mockEndpoint = "invalid_endpoint";
      const mockError = new Error(`Invalid endpoint: ${mockEndpoint}`);
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.resolve(mockEndpoint));
      (parseUrl as jest.Mock).mockImplementationOnce(() => {
        throw mockError;
      });
      return expect(getInstanceMetadataHost()).rejects.toThrow(mockError);
    });

    describe("returns host when endpoint is valid", () => {
      it("with port", () => {
        const mockHostname = "127.0.0.1";
        const mockPort = 80;
        mockEndpoint = `http://${mockHostname}:${mockPort}`;
        (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.resolve(mockEndpoint));
        (parseUrl as jest.Mock).mockReturnValue({ hostname: mockHostname, port: mockPort });
        return expect(getInstanceMetadataHost()).resolves.toBe(`${mockHostname}:${mockPort}`);
      });

      it("without port", () => {
        const mockHostname = "127.0.0.1";
        mockEndpoint = `http://${mockHostname}`;
        (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.resolve(mockEndpoint));
        (parseUrl as jest.Mock).mockReturnValue({ hostname: mockHostname });
        return expect(getInstanceMetadataHost()).resolves.toBe(mockHostname);
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
    ])("returns %s when endpointMode=%s", (endpoint, endpointMode) => {
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.resolve(endpointMode));
      return expect(getInstanceMetadataHost()).resolves.toEqual(endpoint);
    });

    it(`throws Error when endpointMode is unsupported`, () => {
      const unsupportedEndpointMode = "unsupportedEndpointMode";
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.resolve(unsupportedEndpointMode));
      return expect(getInstanceMetadataHost()).rejects.toThrowError(
        `Unsupported endpoint mode: ${unsupportedEndpointMode}.` + ` Select from ${Object.values(EndpointMode)}`
      );
    });

    it(`rethrows Error when reading endpointMode throws error`, () => {
      const error = new Error("error");
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.reject(error));
      return expect(getInstanceMetadataHost()).rejects.toThrow(error);
    });
  });

  describe("when reading endpoint throws error", () => {
    it("rethrows error", () => {
      const error = new Error("error");
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.reject(error));
      expect(getInstanceMetadataHost()).rejects.toThrow(error);
      expect(loadConfig).toHaveBeenCalledTimes(1);
      expect(loadConfig).toHaveBeenCalledWith(ENDPOINT_CONFIG_OPTIONS);
    });
  });
});
