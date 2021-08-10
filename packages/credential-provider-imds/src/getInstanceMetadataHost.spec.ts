import { loadConfig, LoadedConfigSelectors } from "@aws-sdk/node-config-provider";

import { getInstanceMetadataHost } from "./getInstanceMetadataHost";
import { ENDPOINT_CONFIG_OPTIONS } from "./remoteProvider/EndpointConfigOptions";

jest.mock("@aws-sdk/node-config-provider");

describe(getInstanceMetadataHost.name, () => {
  afterEach(() => {
    expect(loadConfig).toBeCalledTimes(1);
    expect(loadConfig).toBeCalledWith(ENDPOINT_CONFIG_OPTIONS);
    jest.clearAllMocks();
  });

  describe("when loadConfig returns endpoint", () => {
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

  describe("when loadConfig returns undefined", () => {
    beforeEach(() => {
      (loadConfig as jest.Mock).mockReturnValueOnce(() => Promise.resolve(undefined));
    });

    it("returns 169.254.169.254", () => {
      expect(getInstanceMetadataHost()).resolves.toBe("169.254.169.254");
    });
  });
});
