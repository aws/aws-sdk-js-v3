import { getCacheKey } from "./getCacheKey";

describe(getCacheKey.name, () => {
  const commandName = "commandName";
  const mockCredentials = {
    accessKeyId: "accessKeyId",
    secretAccessKey: "secretAccessKey",
  };

  const config = {
    credentials: () => Promise.resolve(mockCredentials),
  };

  it("returns accessKeyId in cacheKey", async () => {
    // @ts-ignore is missing the following properties from type 'AwsAuthResolvedConfig'
    const cacheKey = await getCacheKey(commandName, config, {});
    expect(cacheKey).toEqual({ accessKeyId: mockCredentials.accessKeyId }.toString());
  });

  it("returns commandName and identifiers if passed", async () => {
    const identifiers = { key: "value" };
    // @ts-ignore is missing the following properties from type 'AwsAuthResolvedConfig'
    const cacheKey = await getCacheKey(commandName, config, { identifiers });
    expect(cacheKey).toEqual({ accessKeyId: mockCredentials.accessKeyId, commandName, identifiers }.toString());
  });
});
