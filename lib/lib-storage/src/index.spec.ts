import { describe, expect, test as it } from "vitest";

import * as Storage from "./index";

describe("Storage Packages", () => {
  it("has Upload", () => {
    expect(Storage.Upload).toBeDefined();
  });
});
