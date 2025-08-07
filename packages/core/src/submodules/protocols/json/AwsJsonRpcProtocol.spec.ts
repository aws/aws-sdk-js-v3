import { SCHEMA } from "@smithy/core/schema";
import { describe, expect, test as it } from "vitest";

import { AwsJsonRpcProtocol } from "./AwsJsonRpcProtocol";

describe(AwsJsonRpcProtocol.name, () => {
  it("has expected codec settings", async () => {
    const protocol = new (class extends AwsJsonRpcProtocol {
      constructor() {
        super({ defaultNamespace: "", serviceTarget: "" });
      }

      getShapeId(): string {
        throw new Error("Method not implemented.");
      }

      protected getJsonRpcVersion(): "1.1" | "1.0" {
        throw new Error("Method not implemented.");
      }
    })();

    const codec = protocol.getPayloadCodec();
    expect(codec.settings).toEqual({
      jsonName: false,
      timestampFormat: {
        default: SCHEMA.TIMESTAMP_EPOCH_SECONDS,
        useTrait: true,
      },
    });
  });
});
