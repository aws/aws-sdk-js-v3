import { chain, memoize } from "@aws-sdk/property-provider";

import { defaultProvider, RegionProviderConfiguration } from "./defaultProvider";
import { fromEnv } from "./fromEnv";
import { fromSharedConfigFiles } from "./fromSharedConfigFiles";

jest.mock("./fromEnv", () => ({
  fromEnv: jest.fn(),
}));

jest.mock("./fromSharedConfigFiles", () => ({
  fromSharedConfigFiles: jest.fn(),
}));

jest.mock("@aws-sdk/property-provider", () => ({
  chain: jest.fn(),
  memoize: jest.fn(),
}));

describe("defaultProvider", () => {
  const configuration: RegionProviderConfiguration = {
    profile: "profile",
    environmentVariableName: "environmentVariableName",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("passes fromEnv() and fromSharedConfigFiles() to chain", () => {
    const mockFromEnvReturn = "mockFromEnvReturn";
    (fromEnv as jest.Mock).mockReturnValueOnce(mockFromEnvReturn);

    const mockFromSharedConfigFilesReturn = "mockFromSharedConfigFilesReturn";
    (fromSharedConfigFiles as jest.Mock).mockReturnValueOnce(mockFromSharedConfigFilesReturn);

    defaultProvider(configuration);

    expect(fromEnv).toHaveBeenCalledTimes(1);
    expect(fromEnv).toHaveBeenCalledWith(configuration);
    expect(fromSharedConfigFiles).toHaveBeenCalledTimes(1);
    expect(fromSharedConfigFiles).toHaveBeenCalledWith(configuration);

    expect(chain).toHaveBeenCalledTimes(1);
    expect(chain).toHaveBeenCalledWith(mockFromEnvReturn, mockFromSharedConfigFilesReturn);
  });

  it("passes output of chain to memoize", () => {
    const mockChainReturn = "mockChainReturn";
    (chain as jest.Mock).mockReturnValueOnce(mockChainReturn);

    defaultProvider(configuration);

    expect(chain).toHaveBeenCalledTimes(1);
    expect(memoize).toHaveBeenCalledTimes(1);
    expect(memoize).toHaveBeenCalledWith(mockChainReturn);
  });

  it("returns output memoize", () => {
    const mockMemoizeReturn = "mockMemoizeReturn";
    (memoize as jest.Mock).mockReturnValueOnce(mockMemoizeReturn);

    expect(defaultProvider(configuration)).toEqual(mockMemoizeReturn);
  });
});
