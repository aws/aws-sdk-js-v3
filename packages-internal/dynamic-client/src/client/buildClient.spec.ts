import { SmithyRpcV2CborProtocol } from "@smithy/core/cbor";
import { TypeRegistry } from "@smithy/core/schema";
import { afterEach, describe, expect, test as it } from "vitest";

import { buildEndpointProvider } from "../endpoint/buildEndpointProvider";
import type { ClientProtocolCtor } from "../protocol/types";
import { buildClient } from "./buildClient";

const stubRequestHandler = {
  handle: async () => ({ response: {} as any }),
  destroy: () => {},
};

const make = (config: Record<string, any> = {}) => {
  const Ctor = buildClient({
    protocol: SmithyRpcV2CborProtocol as ClientProtocolCtor,
    protocolSettings: {
      defaultNamespace: "example",
      errorTypeRegistries: [],
      xmlNamespace: "",
      version: "",
      serviceTarget: "",
    },
    endpointProvider: buildEndpointProvider({ type: "service" }),
    typecheck: { input: "warn", output: "warn" },
  });
  return new Ctor({
    requestHandler: stubRequestHandler,
    region: "us-east-1",
    endpoint: "https://localhost",
    ...config,
  });
};

describe("buildClient", () => {
  afterEach(() => {
    for (const registry of TypeRegistry["registries"].values()) {
      registry.clear();
    }
    TypeRegistry["registries"].clear();
  });

  it("constructs a client and instantiates the protocol from settings", () => {
    const client = make();
    expect(client.config.protocol).toBeInstanceOf(SmithyRpcV2CborProtocol);
  });

  it("applies runtime-config defaults", () => {
    const client = make();
    expect(typeof client.config.base64Decoder).toBe("function");
    expect(typeof client.config.utf8Encoder).toBe("function");
    expect(typeof client.config.urlParser).toBe("function");
    expect(client.config.logger).toBeDefined();
  });

  it("registers the generic middleware stack", () => {
    const client = make();
    const names = client.middlewareStack.identify();
    const joined = names.join("\n");
    expect(joined).toContain("serializerMiddleware");
    expect(joined).toContain("deserializerMiddleware");
    expect(joined).toContain("retryMiddleware");
    expect(joined).toContain("httpAuthSchemeMiddleware");
    expect(joined).toContain("runtimeTypecheckMiddleware");
  });

  it("preserves caller-supplied config over defaults", () => {
    const customLogger = { debug() {}, info() {}, warn() {}, error() {} };
    const client = make({ logger: customLogger });
    expect(client.config.logger).toBe(customLogger);
  });

  it("uses the endpoint provided by the caller", async () => {
    const client = make({ endpoint: "https://example.com" });
    expect(client.config.endpoint).toBeDefined();
  });
});
