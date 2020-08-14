import {
  NODE_REGION_CONFIG_FILE_OPTIONS,
  NODE_REGION_CONFIG_OPTIONS,
  REGION_ENV_NAME,
  REGION_INI_NAME,
  resolveRegionConfig,
} from "./RegionConfig";

describe("RegionConfig", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("assigns region provider if presented with a region string", async () => {
    const region = "us-foo-0";
    const output = await resolveRegionConfig({ region }).region();
    expect(output).toStrictEqual(region);
  });

  it("assigns region as it-is if presented with a region provider", async () => {
    const region = "us-foo-1";
    const regionProvider = jest.fn().mockResolvedValue(region);
    const output = await resolveRegionConfig({ region: regionProvider }).region();
    expect(output).toStrictEqual(region);
  });

  it("throw if region is not supplied", () => {
    expect(() => resolveRegionConfig({})).toThrow();
  });

  describe("node region config options", () => {
    describe("environmentVariableSelector", () => {
      it(`should return value of env ${REGION_ENV_NAME}`, () => {
        const region = "us-foo-1";
        const env = { [REGION_ENV_NAME]: region };
        expect(NODE_REGION_CONFIG_OPTIONS.environmentVariableSelector(env)).toBe(region);
      });
    });

    describe("configFileSelector", () => {
      it(`should return value of shared INI files entry ${REGION_INI_NAME}`, () => {
        const region = "us-foo-1";
        const profile = { [REGION_INI_NAME]: region };
        expect(NODE_REGION_CONFIG_OPTIONS.configFileSelector(profile)).toBe(region);
      });
    });

    describe("default", () => {
      it(`should throw`, () => {
        expect(NODE_REGION_CONFIG_OPTIONS.default).toBeInstanceOf(Function);
        expect(() => (NODE_REGION_CONFIG_OPTIONS.default as any)()).toThrow();
      });
    });

    it("node region config file options should prefer credentials", () => {
      expect(NODE_REGION_CONFIG_FILE_OPTIONS.preferredFile).toBe("credentials");
    });
  });
});
