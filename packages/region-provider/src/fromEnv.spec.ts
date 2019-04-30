import { fromEnv, ENV_REGION } from "./fromEnv";
import { ProviderError } from "@aws-sdk/property-provider";

describe("fromEnv", () => {
  const ENV_CUSTOM = "AWS_DEFAULT_REGION";
  const envRegion = process.env[ENV_REGION];
  const customEnv = process.env[ENV_CUSTOM];

  beforeEach(() => {
    delete process.env[ENV_REGION];
    delete process.env[ENV_CUSTOM];
  });

  afterAll(() => {
    process.env[ENV_CUSTOM] = customEnv;
    process.env[ENV_REGION] = envRegion;
  });

  it(`should read from the ${ENV_REGION} environment variable`, async () => {
    process.env[ENV_REGION] = "us-north-12";
    expect(await fromEnv()()).toBe(process.env[ENV_REGION]);
  });

  it(`should reject the promise is ${ENV_REGION} is not set`, async () => {
    await expect(fromEnv()()).rejects.toMatchObject(
      new ProviderError(
        `No value defined for the AWS_REGION environment variable`
      )
    );
  });

  it("should allow specifying custom environment variables", async () => {
    process.env[ENV_CUSTOM] = "eu-central-35";
    expect(process.env[ENV_REGION]).toBeUndefined();
    expect(await fromEnv({ environmentVariableName: ENV_CUSTOM })()).toBe(
      process.env[ENV_CUSTOM]
    );
  });
});
