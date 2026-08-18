import { describe, expect, test as it } from "vitest";

import type { AstShape } from "../ast/types";
import { buildEndpointProvider } from "./buildEndpointProvider";

describe("buildEndpointProvider", () => {
  it("throws for a service with no endpoint traits and no configured endpoint", () => {
    const provider = buildEndpointProvider({ type: "service" });
    expect(() => provider({})).toThrow(/no endpoint could be resolved/);
  });

  it("returns the caller-supplied endpoint when no endpoint traits exist", () => {
    const provider = buildEndpointProvider({ type: "service" });
    const resolved = provider({ endpoint: "https://example.com" });
    expect(resolved.url.href).toBe("https://example.com/");
  });

  it("resolves via a ruleset trait", () => {
    const service: AstShape = {
      type: "service",
      traits: {
        "smithy.rules#endpointRuleSet": {
          version: "1.0",
          parameters: {
            endpoint: { type: "string", builtIn: "SDK::Endpoint", required: true, documentation: "" },
          },
          rules: [
            {
              conditions: [],
              endpoint: { url: "{endpoint}" },
              type: "endpoint",
            },
          ],
        },
      },
    };
    const provider = buildEndpointProvider(service);
    const resolved = provider({ endpoint: "https://rules.example.com" });
    expect(resolved.url.href).toBe("https://rules.example.com/");
  });
});
