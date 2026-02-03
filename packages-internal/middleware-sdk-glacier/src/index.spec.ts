import { describe, expect, test as it } from "vitest";

import {
  accountIdDefaultMiddleware,
  addChecksumHeadersMiddleware,
  addGlacierApiVersionMiddleware,
  getGlacierPlugin,
} from "./index";

describe("middleware-sdk-glacier package exports", () => {
  it("addChecksumHeadersMiddleware", () => {
    expect(typeof addChecksumHeadersMiddleware).toBe("function");
  });

  it("addGlacierApiVersionMiddleware", () => {
    expect(typeof addGlacierApiVersionMiddleware).toBe("function");
  });

  it("accountIdDefaultMiddleware", () => {
    expect(typeof accountIdDefaultMiddleware).toBe("function");
  });

  it("getGlacierPlugin", () => {
    expect(typeof getGlacierPlugin).toBe("function");
  });
});
