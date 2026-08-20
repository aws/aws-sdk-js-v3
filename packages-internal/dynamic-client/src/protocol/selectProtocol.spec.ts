import { SmithyRpcV2CborProtocol } from "@smithy/core/cbor";
import { describe, expect, test as it } from "vitest";

import { ModelIndex } from "../ast/ModelIndex";
import { rpcv2CborAst } from "../schema/rpcv2CborAst.fixture";
import { selectProtocol } from "./selectProtocol";
import type { ClientProtocolCtor } from "./types";

describe("selectProtocol", () => {
  const index = new ModelIndex(rpcv2CborAst);

  it("selects the cbor protocol for a cbor model", () => {
    const { protocol, protocolSettings } = selectProtocol(index, [SmithyRpcV2CborProtocol as ClientProtocolCtor], []);
    expect(protocol).toBe(SmithyRpcV2CborProtocol);
    expect(protocolSettings.defaultNamespace).toBe("smithy.protocoltests.rpcv2Cbor");
  });

  it("passes error registries through in settings", () => {
    const registries: any[] = [];
    const { protocolSettings } = selectProtocol(index, [SmithyRpcV2CborProtocol as ClientProtocolCtor], registries);
    expect(protocolSettings.errorTypeRegistries).toBe(registries);
  });

  it("throws when no candidate matches the service protocol trait", () => {
    class OtherProtocol {
      public getShapeId(): string {
        return "aws.protocols#restJson1";
      }
    }
    expect(() => selectProtocol(index, [OtherProtocol as unknown as ClientProtocolCtor], [])).toThrow(
      /none of the candidate protocols/
    );
  });

  it("throws when no candidates are provided", () => {
    expect(() => selectProtocol(index, [], [])).toThrow(/no candidate protocols/);
  });

  it("honors model preference order when multiple candidates match", () => {
    // Two candidates; only the cbor one matches the model, so order among
    // non-matching candidates is irrelevant, but the matching one is chosen.
    class OtherProtocol {
      public getShapeId(): string {
        return "aws.protocols#awsJson1_0";
      }
    }
    const { protocol } = selectProtocol(
      index,
      [OtherProtocol as unknown as ClientProtocolCtor, SmithyRpcV2CborProtocol as ClientProtocolCtor],
      []
    );
    expect(protocol).toBe(SmithyRpcV2CborProtocol);
  });
});
