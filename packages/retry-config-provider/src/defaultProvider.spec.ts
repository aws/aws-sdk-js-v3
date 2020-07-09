import { chain, memoize } from "@aws-sdk/property-provider";

import {
  CONFIG_MAX_ATTEMPTS,
  CONFIG_RETRY_MODE,
  ENV_MAX_ATTEMPTS,
  ENV_RETRY_MODE,
  maxAttemptsProvider,
  retryModeProvider
} from "./defaultProvider";
import { fromEnv } from "./fromEnv";
import { fromSharedConfigFiles, SharedConfigInit } from "./fromSharedConfigFiles";

jest.mock("./fromEnv", () => ({
  fromEnv: jest.fn()
}));

jest.mock("./fromSharedConfigFiles", () => ({
  fromSharedConfigFiles: jest.fn()
}));

jest.mock("@aws-sdk/property-provider", () => ({
  chain: jest.fn(),
  memoize: jest.fn()
}));

describe("defaultProvider", () => {
  const configuration: SharedConfigInit = {
    profile: "profile"
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  const testProvider = (providerFunc: Function, envVarName: string, configKey: string) => {
    it("passes fromEnv() and fromSharedConfigFiles() to chain", () => {
      const mockFromEnvReturn = "mockFromEnvReturn";
      (fromEnv as jest.Mock).mockReturnValueOnce(mockFromEnvReturn);

      const mockFromSharedConfigFilesReturn = "mockFromSharedConfigFilesReturn";
      (fromSharedConfigFiles as jest.Mock).mockReturnValueOnce(mockFromSharedConfigFilesReturn);

      providerFunc(configuration);

      expect(fromEnv).toHaveBeenCalledTimes(1);
      expect(fromEnv).toHaveBeenCalledWith(envVarName);
      expect(fromSharedConfigFiles).toHaveBeenCalledTimes(1);
      expect(fromSharedConfigFiles).toHaveBeenCalledWith(configuration, configKey);

      expect(chain).toHaveBeenCalledTimes(1);
      expect(chain).toHaveBeenCalledWith(mockFromEnvReturn, mockFromSharedConfigFilesReturn);
    });

    it("passes output of chain to memoize", () => {
      const mockChainReturn = "mockChainReturn";
      (chain as jest.Mock).mockReturnValueOnce(mockChainReturn);

      providerFunc(configuration);

      expect(chain).toHaveBeenCalledTimes(1);
      expect(memoize).toHaveBeenCalledTimes(1);
      expect(memoize).toHaveBeenCalledWith(mockChainReturn);
    });

    it("returns output memoize", () => {
      const mockMemoizeReturn = "mockMemoizeReturn";
      (memoize as jest.Mock).mockReturnValueOnce(mockMemoizeReturn);

      expect(providerFunc(configuration)).toEqual(mockMemoizeReturn);
    });
  };

  describe("maxAttemptsProvider", () => {
    testProvider(maxAttemptsProvider, ENV_MAX_ATTEMPTS, CONFIG_MAX_ATTEMPTS);
  });

  describe("retryModeProvider", () => {
    testProvider(retryModeProvider, ENV_RETRY_MODE, CONFIG_RETRY_MODE);
  });
});
