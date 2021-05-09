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
    const cacheKey = await getCacheKey(commandName, config, {});
    expect(cacheKey).toEqual(JSON.stringify({ accessKeyId: mockCredentials.accessKeyId }));
  });

  it("returns commandName and identifiers if passed", async () => {
    const identifiers = new Map().set("key", "value");
    const identifiersObj = { key: "value" };
    const cacheKey = await getCacheKey(commandName, config, { identifiers });
    expect(cacheKey).toEqual(
      JSON.stringify({ accessKeyId: mockCredentials.accessKeyId, commandName, identifiers: identifiersObj })
    );
  });

  it("returns same cache key irrespective of key order in identifiers", async () => {
    const identifiers1 = new Map().set("key1", "value1").set("key2", "value2");
    const cacheKey1 = await getCacheKey(commandName, config, { identifiers: identifiers1 });
    const identifiers2 = new Map().set("key2", "value2").set("key1", "value1");
    const cacheKey2 = await getCacheKey(commandName, config, { identifiers: identifiers2 });
    expect(cacheKey1).toStrictEqual(cacheKey2);
  });
});
