import { Endpoint } from "@aws-sdk/types";

import { createConfigValueProvider } from "./createConfigValueProvider";

describe(createConfigValueProvider.name, () => {
  it("should create a normalized provider for any config value", async () => {
    const config = {
      a: 1,
      b: 2,
    };
    expect(await createConfigValueProvider("a", "a", config)()).toEqual(1);
  });

  it("should look up both the canonical Endpoint ruleset param name and any localized override", async () => {
    const config = {
      a: 1,
      b: 2,
    };
    expect(await createConfigValueProvider("a", "x", config)()).toEqual(1);
    expect(await createConfigValueProvider("x", "a", config)()).toEqual(1);
  });

  it("should normalize endpoint objects into URLs", async () => {
    const sampleUrl = "https://aws.amazon.com/";
    const config = {
      str: sampleUrl,
      v1: {
        protocol: "https:",
        hostname: new URL(sampleUrl).hostname,
        path: "/",
      } as Endpoint,
      v2: { url: new URL(sampleUrl) },
    };
    expect(await createConfigValueProvider("str", "endpoint", config)()).toEqual(sampleUrl);
    expect(await createConfigValueProvider("v1", "endpoint", config)()).toEqual(sampleUrl);
    expect(await createConfigValueProvider("v2", "endpoint", config)()).toEqual(sampleUrl);
  });
});
