import { Endpoint } from "@aws-sdk/types";

import { createConfigProvider } from "./getEndpointFromInstructions";

describe(createConfigProvider.name, () => {
  it("should create a normalized provider for any config value", async () => {
    const config = {
      a: 1,
      b: 2,
    };
    expect(await createConfigProvider("a", "a", config)()).toEqual(1);
  });

  it("should look up both the canonical Endpoint ruleset param name and any localized override", async () => {
    const config = {
      a: 1,
      b: 2,
    };
    expect(await createConfigProvider("a", "x", config)()).toEqual(1);
    expect(await createConfigProvider("x", "a", config)()).toEqual(1);
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
    expect(await createConfigProvider("str", "endpoint", config)()).toEqual(sampleUrl);
    expect(await createConfigProvider("v1", "endpoint", config)()).toEqual(sampleUrl);
    expect(await createConfigProvider("v2", "endpoint", config)()).toEqual(sampleUrl);
  });
});
