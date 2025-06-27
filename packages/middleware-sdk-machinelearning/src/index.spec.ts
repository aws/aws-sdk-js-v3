import { describe, expect, test as it } from "vitest";

import { getPredictEndpointPlugin, predictEndpointMiddleware } from "./index";

describe("middleware-sdk-machinelearning package exports", () => {
  it("predictEndpointMiddleware", () => {
    expect(typeof predictEndpointMiddleware).toBe("function");
  });

  it("getPredictEndpointPlugin", () => {
    expect(typeof getPredictEndpointPlugin).toBe("function");
  });
});
