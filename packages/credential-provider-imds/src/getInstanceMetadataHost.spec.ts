import { loadConfig } from "@aws-sdk/node-config-provider";

import { getInstanceMetadataHost } from "./getInstanceMetadataHost";
import { Endpoint } from "./remoteProvider/Endpoint";
import { ENDPOINT_CONFIG_OPTIONS } from "./remoteProvider/EndpointConfigOptions";
import { EndpointMode } from "./remoteProvider/EndpointMode";
import { ENDPOINT_MODE_CONFIG_OPTIONS } from "./remoteProvider/EndpointModeConfigOptions";

jest.mock("@aws-sdk/node-config-provider");

describe(getInstanceMetadataHost.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("when endpoint is defined", () => {
    afterEach(() => {
      expect(loadConfig).toBeCalledTimes(1);
      expect(loadConfig).toBeCalledWith(ENDPOINT_CONFIG_OPTIONS);
    });

    it("throws ERR_INVALID_URL when endpoint is invalid", () => {
      const endpoint = "invalid_endpoint";
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.resolve(endpoint));
      expect(getInstanceMetadataHost()).rejects.toThrow();
    });

    it("returns host when endpoint is valid", () => {
      const host = "127.0.0.1";
      const endpoint = `http://${host}`;
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.resolve(endpoint));
      expect(getInstanceMetadataHost()).resolves.toBe(host);
    });
  });

  describe("when endpoint is not defined", () => {
    beforeEach(() => {
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.resolve(undefined));
    });

    afterEach(() => {
      expect(loadConfig).toBeCalledTimes(2);
      expect(loadConfig).toHaveBeenNthCalledWith(1, ENDPOINT_CONFIG_OPTIONS);
      expect(loadConfig).toHaveBeenNthCalledWith(2, ENDPOINT_MODE_CONFIG_OPTIONS);
    });

    it.each([
      [Endpoint.IPv4, EndpointMode.IPv4],
      [Endpoint.IPv6, EndpointMode.IPv6],
    ])("returns %s when endpointMode=%s", (endpoint, endpointMode) => {
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.resolve(endpointMode));
      expect(getInstanceMetadataHost()).resolves.toEqual(endpoint);
    });

    it(`throws Error when endpointMode is unsupported`, () => {
      const unsupportedEndpointMode = "unsupportedEndpointMode";
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.resolve(unsupportedEndpointMode));
      expect(getInstanceMetadataHost()).rejects.toThrowError(
        `Unsupported endpoint mode: ${unsupportedEndpointMode}.` + ` Select from ${Object.values(EndpointMode)}`
      );
    });

    it(`rethrows Error when reading endpointMode throws error`, () => {
      const error = new Error("error");
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.reject(error));
      expect(getInstanceMetadataHost()).rejects.toThrow(error);
    });
  });

  describe("when reading endpoint throws error", () => {
    it("rethrows error", () => {
      const error = new Error("error");
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.reject(error));
      expect(getInstanceMetadataHost()).rejects.toThrow(error);
      expect(loadConfig).toBeCalledTimes(1);
      expect(loadConfig).toBeCalledWith(ENDPOINT_CONFIG_OPTIONS);
    });
  });
});
