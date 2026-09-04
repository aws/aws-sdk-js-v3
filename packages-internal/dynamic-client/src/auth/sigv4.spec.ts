import { describe, expect, test as it } from "vitest";

import { ModelIndex } from "../ast/ModelIndex";
import type { SmithyAst } from "../ast/types";
import { buildSigV4Auth } from "./sigv4";

function makeAst(serviceTraits: Record<string, unknown> = {}): SmithyAst {
  return {
    smithy: "2.0",
    shapes: {
      "com.example#MyService": {
        type: "service",
        version: "2024-01-01",
        traits: serviceTraits,
        operations: [{ target: "com.example#GetItem" }],
      },
      "com.example#GetItem": {
        type: "operation",
        input: { target: "com.example#GetItemInput" },
        output: { target: "com.example#GetItemOutput" },
      },
      "com.example#GetItemInput": {
        type: "structure",
        members: {},
      },
      "com.example#GetItemOutput": {
        type: "structure",
        members: {},
      },
    },
  };
}

describe("buildSigV4Auth", () => {
  it("returns undefined when aws.auth#sigv4 trait is not present", () => {
    const ast = makeAst({
      "smithy.api#noAuth": {},
    });
    const index = new ModelIndex(ast);
    expect(buildSigV4Auth(index)).toBeUndefined();
  });

  it("returns undefined when service has no traits", () => {
    const ast: SmithyAst = {
      smithy: "2.0",
      shapes: {
        "com.example#MyService": {
          type: "service",
          version: "2024-01-01",
          operations: [],
        },
      },
    };
    const index = new ModelIndex(ast);
    expect(buildSigV4Auth(index)).toBeUndefined();
  });

  it("returns SigV4 auth config when aws.auth#sigv4 trait is present", () => {
    const ast = makeAst({
      "aws.auth#sigv4": { name: "myservice" },
      "smithy.protocols#rpcv2Cbor": {},
    });
    const index = new ModelIndex(ast);
    const result = buildSigV4Auth(index);

    expect(result).toBeDefined();
    expect(result!.httpAuthSchemes).toHaveLength(1);
    expect(result!.httpAuthSchemes[0].schemeId).toBe("aws.auth#sigv4");
    expect(result!.httpAuthSchemeProvider).toBeTypeOf("function");
    expect(result!.httpAuthSchemeParametersProvider).toBeTypeOf("function");
    expect(result!.identityProviderConfigProvider).toBeTypeOf("function");
  });

  it("httpAuthSchemeProvider returns sigv4 option with signing name and region", () => {
    const ast = makeAst({
      "aws.auth#sigv4": { name: "dynamodb" },
    });
    const index = new ModelIndex(ast);
    const result = buildSigV4Auth(index)!;

    const options = result.httpAuthSchemeProvider({ operation: "GetItem", region: "us-east-1" });
    expect(options).toHaveLength(1);
    expect(options[0].schemeId).toBe("aws.auth#sigv4");
    expect(options[0].signingProperties).toEqual(
      expect.objectContaining({
        name: "dynamodb",
        region: "us-east-1",
      })
    );
  });

  it("httpAuthSchemeParametersProvider resolves region from config", async () => {
    const ast = makeAst({
      "aws.auth#sigv4": { name: "myservice" },
    });
    const index = new ModelIndex(ast);
    const result = buildSigV4Auth(index)!;

    const config = { region: "us-west-2" };
    const context = { __smithy_context: { operation: "GetItem" } } as any;
    const params = await result.httpAuthSchemeParametersProvider(config, context, {});
    expect(params.operation).toBe("GetItem");
    expect(params.region).toBe("us-west-2");
  });

  it("httpAuthSchemeParametersProvider throws when region is not configured", async () => {
    const ast = makeAst({
      "aws.auth#sigv4": { name: "myservice" },
    });
    const index = new ModelIndex(ast);
    const result = buildSigV4Auth(index)!;

    const config = { region: undefined };
    const context = { __smithy_context: { operation: "GetItem" } } as any;
    await expect(result.httpAuthSchemeParametersProvider(config, context, {})).rejects.toThrow(
      "expected `region` to be configured for `aws.auth#sigv4`"
    );
  });

  it("identityProviderConfigProvider maps aws.auth#sigv4 to config.credentials", async () => {
    const ast = makeAst({
      "aws.auth#sigv4": { name: "myservice" },
    });
    const index = new ModelIndex(ast);
    const result = buildSigV4Auth(index)!;

    const mockCredentials = async () => ({
      accessKeyId: "AKID",
      secretAccessKey: "SECRET",
    });
    const config = { credentials: mockCredentials };
    const ipc = await result.identityProviderConfigProvider(config);
    const provider = ipc.getIdentityProvider("aws.auth#sigv4");
    expect(provider).toBe(mockCredentials);
  });

  it("uses 'service' as default signing name when trait has no name", () => {
    const ast = makeAst({
      "aws.auth#sigv4": {},
    });
    const index = new ModelIndex(ast);
    const result = buildSigV4Auth(index)!;

    const options = result.httpAuthSchemeProvider({ operation: "GetItem", region: "us-east-1" });
    expect(options[0].signingProperties!.name).toBe("service");
  });
});
