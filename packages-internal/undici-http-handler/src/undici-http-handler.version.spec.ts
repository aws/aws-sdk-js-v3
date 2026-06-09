import { engines as smithyEngines, version as smithyVersion } from "@smithy/undici-http-handler/package.json";
import { describe, expect, it } from "vitest";

import { engines, version } from "../package.json";

describe("undici-http-handler version", () => {
  it("engines.node should be same as @smithy/undici-http-handler engines.node", () => {
    expect(
      engines.node,
      "Note: engines.node should be the same as @smithy/undici-http-handler's engines.node." +
        " If @smithy/undici-http-handler updated its engines requirement, update this package to match."
    ).toEqual(smithyEngines.node);
  });

  it("major version should be same as @smithy/undici-http-handler major version", () => {
    const localMajor = version.split(".")[0];
    const smithyMajor = smithyVersion.split(".")[0];
    expect(
      localMajor,
      "Note: The major version should be the same as @smithy/undici-http-handler's major version." +
        " If @smithy/undici-http-handler released a new major version, update this package to match."
    ).toEqual(smithyMajor);
  });
});
