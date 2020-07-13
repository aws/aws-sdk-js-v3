import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE } from "@aws-sdk/middleware-retry";
import { chain, fromStatic, memoize } from "@aws-sdk/property-provider";

import {
  CONFIG_MAX_ATTEMPTS,
  CONFIG_RETRY_MODE,
  ENV_MAX_ATTEMPTS,
  ENV_RETRY_MODE,
  maxAttemptsProvider,
  retryModeProvider,
} from "./defaultProvider";
import { fromEnv } from "./fromEnv";
import { fromSharedConfigFiles, SharedConfigInit } from "./fromSharedConfigFiles";

jest.mock("./fromEnv");
jest.mock("./fromSharedConfigFiles");
jest.mock("@aws-sdk/property-provider");

describe("defaultProvider", () => {
  const configuration: SharedConfigInit = {
    profile: "profile",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  const testProvider = (providerFunc: Function, envVarName: string, configKey: string, defaultValue: string) => {
    it("passes fromEnv(), fromSharedConfigFiles() and fromStatic() to chain", () => {
      const mockFromEnvReturn = "mockFromEnvReturn";
      (fromEnv as jest.Mock).mockReturnValueOnce(mockFromEnvReturn);

      const mockFromSharedConfigFilesReturn = "mockFromSharedConfigFilesReturn";
      (fromSharedConfigFiles as jest.Mock).mockReturnValueOnce(mockFromSharedConfigFilesReturn);

      const mockFromStatic = "mockFromStatic";
      (fromStatic as jest.Mock).mockReturnValueOnce(mockFromStatic);

      providerFunc(configuration);

      expect(fromEnv).toHaveBeenCalledTimes(1);
      expect(fromEnv).toHaveBeenCalledWith(envVarName);
      expect(fromSharedConfigFiles).toHaveBeenCalledTimes(1);
      expect(fromSharedConfigFiles).toHaveBeenCalledWith(configuration, configKey);
      expect(fromStatic).toHaveBeenCalledTimes(1);
      expect(fromStatic).toHaveBeenCalledWith(defaultValue);

      expect(chain).toHaveBeenCalledTimes(1);
      expect(chain).toHaveBeenCalledWith(mockFromEnvReturn, mockFromSharedConfigFilesReturn, mockFromStatic);
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
    testProvider(maxAttemptsProvider, ENV_MAX_ATTEMPTS, CONFIG_MAX_ATTEMPTS, DEFAULT_MAX_ATTEMPTS);
  });

  describe("retryModeProvider", () => {
    testProvider(retryModeProvider, ENV_RETRY_MODE, CONFIG_RETRY_MODE, DEFAULT_RETRY_MODE);
  });
});
