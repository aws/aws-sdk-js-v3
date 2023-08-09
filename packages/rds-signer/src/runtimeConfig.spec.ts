import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import { getRuntimeConfig as getRnRuntimeConfig } from "./runtimeConfig.native";
import { SignerConfig } from "./Signer";

describe("getRuntimeConfig", () => {
  it.each([
    ["browser", getBrowserRuntimeConfig],
    ["react native", getRnRuntimeConfig],
  ])("should throw if credential or region is missing in %s", async (_, getRuntimeConfig) => {
    const minimalParams: SignerConfig = {
      username: "testuser",
      hostname: "https://testhost",
      port: 5432,
    };
    const { credentials, region } = getRuntimeConfig(minimalParams);
    expect(credentials).rejects.toEqual("Credential is missing");
    expect(region).rejects.toEqual("Region is missing");
  });
});
