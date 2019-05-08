import { defaultProvider } from "./defaultProvider";
import { ProviderError } from "@aws-sdk/property-provider";

jest.mock("./fromEnv", () => {
  const envProvider = jest.fn();
  return {
    fromEnv: jest.fn().mockReturnValue(envProvider)
  };
});
import { fromEnv, EnvConfiguration } from "./fromEnv";

jest.mock("./fromSharedConfigFiles", () => {
  const iniProvider = jest.fn();
  return {
    fromSharedConfigFiles: jest.fn().mockReturnValue(iniProvider)
  };
});
import {
  fromSharedConfigFiles,
  SharedConfigInit
} from "./fromSharedConfigFiles";

beforeEach(() => {
  (fromEnv() as any).mockClear();
  (fromSharedConfigFiles() as any).mockClear();
  (fromEnv as any).mockClear();
  (fromSharedConfigFiles as any).mockClear();
});

describe("defaultProvider", () => {
  it("should stop after the environmental provider if a region has been found", async () => {
    const region = "foo";
    (fromEnv() as any).mockImplementation(() => Promise.resolve(region));

    expect(await defaultProvider()()).toEqual(region);
    expect((fromEnv() as any).mock.calls.length).toBe(1);
    expect((fromSharedConfigFiles() as any).mock.calls.length).toBe(0);
  });

  it("should continue on to the ini provider if no environment variable region has been found", async () => {
    const region = "foo";

    (fromEnv() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Nothing here!"))
    );
    (fromSharedConfigFiles() as any).mockImplementation(() =>
      Promise.resolve(region)
    );

    expect(await defaultProvider()()).toEqual(region);
    expect((fromEnv() as any).mock.calls.length).toBe(1);
    expect((fromSharedConfigFiles() as any).mock.calls.length).toBe(1);
  });

  it("should pass configuration on to the env provider", async () => {
    const envConfig: EnvConfiguration = {
      environmentVariableName: "foo"
    };

    (fromEnv() as any).mockImplementation(() => Promise.resolve("region"));
    (fromEnv as any).mockClear();

    await expect(defaultProvider(envConfig)()).resolves;

    expect((fromEnv as any).mock.calls.length).toBe(1);
    expect((fromEnv as any).mock.calls[0][0]).toBe(envConfig);
  });

  it("should pass configuration on to the ini provider", async () => {
    const iniConfig: SharedConfigInit = {
      profile: "foo",
      filepath: "/home/user/.secrets/credentials.ini",
      configFilepath: "/home/user/.secrets/credentials.ini"
    };

    (fromEnv() as any).mockImplementation(() =>
      Promise.reject(new ProviderError("Keep moving!"))
    );
    (fromSharedConfigFiles() as any).mockImplementation(() =>
      Promise.resolve("region")
    );

    (fromSharedConfigFiles as any).mockClear();

    await expect(defaultProvider(iniConfig)()).resolves;

    expect((fromSharedConfigFiles as any).mock.calls.length).toBe(1);
    expect((fromSharedConfigFiles as any).mock.calls[0][0]).toBe(iniConfig);
  });

  it("should return the same promise across invocations", async () => {
    const region = "foo";
    (fromEnv() as any).mockImplementation(() => Promise.resolve(region));

    const provider = defaultProvider();

    expect(await provider()).toEqual(region);

    expect(provider()).toBe(provider());

    expect(await provider()).toEqual(region);
    expect((fromEnv() as any).mock.calls.length).toBe(1);
  });
});
