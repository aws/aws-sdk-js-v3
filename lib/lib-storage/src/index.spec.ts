import fs from "node:fs";
import { describe, expect, test as it } from "vitest";

import * as Storage from "./index";
import { runtimeConfig } from "./runtimeConfig";
import { runtimeConfig as runtimeConfigBrowser } from "./runtimeConfig.browser";
import { runtimeConfig as runtimeConfigNative } from "./runtimeConfig.native";

describe("Storage Packages", () => {
  it("has Upload", () => {
    expect(Storage.Upload).toBeDefined();
  });
});

describe("runtimeConfig", () => {
  it("all environments have the same signature", () => {
    const configs = [runtimeConfig, runtimeConfigBrowser, runtimeConfigNative];

    for (const config of configs) {
      expect(typeof config.lstatSync).toBe("function");
      expect(typeof config.isFileReadStream).toBe("function");
    }

    const stream = fs.createReadStream(__filename);

    expect(runtimeConfig.isFileReadStream(stream)).toBe(true);
    expect(runtimeConfigBrowser.isFileReadStream(stream)).toBe(false);
    expect(runtimeConfigNative.isFileReadStream(stream)).toBe(false);

    expect(runtimeConfig.runtime).toBe("node");
    expect(runtimeConfigBrowser.runtime).toBe("browser");
    expect(runtimeConfigNative.runtime).toBe("react-native");
  });
});
