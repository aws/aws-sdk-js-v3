import { describe, expect, test as it, vi } from "vitest";

import { JsonCodec2 } from "./JsonCodec2";
import { JsonShapeDeserializer2 } from "./JsonShapeDeserializer2";
import { JsonShapeSerializer2 } from "./JsonShapeSerializer2";

describe(JsonCodec2.name, () => {
  it("provides a serializer", () => {
    const codec = new JsonCodec2({
      jsonName: false,
      timestampFormat: { default: 7, useTrait: false },
    });

    const serializer = codec.createSerializer() as JsonShapeSerializer2;
    expect(serializer.settings).toEqual(codec.settings);
  });

  it("provides a deserializer", () => {
    const codec = new JsonCodec2({
      jsonName: false,
      timestampFormat: { default: 7, useTrait: false },
    });

    const deserializer = codec.createDeserializer() as JsonShapeDeserializer2;
    expect(deserializer.settings).toEqual(codec.settings);
  });

  it("propagates serdeContext to its serde providers", () => {
    const codec = new JsonCodec2({
      jsonName: false,
      timestampFormat: { default: 7, useTrait: false },
    });

    vi.spyOn(JsonShapeSerializer2.prototype, "setSerdeContext");
    vi.spyOn(JsonShapeDeserializer2.prototype, "setSerdeContext");
    const serdeContext = {} as any;
    codec.setSerdeContext(serdeContext);
    codec.createSerializer();
    expect(JsonShapeSerializer2.prototype.setSerdeContext).toHaveBeenCalledWith(serdeContext);
    codec.createDeserializer();
    expect(JsonShapeDeserializer2.prototype.setSerdeContext).toHaveBeenCalledWith(serdeContext);
  });

  it("serializer works before setSerdeContext is called (uses fallback defaults)", () => {
    const codec = new JsonCodec2({
      jsonName: true,
      timestampFormat: { default: 7, useTrait: true },
    });
    // Do NOT call setSerdeContext — simulates protocol constructor order
    const serializer = codec.createSerializer() as JsonShapeSerializer2;

    const schema = [3, "ns", "S", 0, ["blob"], [21]] as any;
    serializer.write(schema, { blob: new Uint8Array([1, 2, 3]) });
    const result = JSON.parse(new TextDecoder().decode(serializer.flush() as Uint8Array));
    expect(result.blob).toEqual("AQID");
  });

  it("deserializer works before setSerdeContext is called for string input", async () => {
    const codec = new JsonCodec2({
      jsonName: true,
      timestampFormat: { default: 7, useTrait: true },
    });
    // Do NOT call setSerdeContext
    const deserializer = codec.createDeserializer() as JsonShapeDeserializer2;

    const schema = [3, "ns", "S", 0, ["blob"], [21]] as any;
    const result = await deserializer.read(schema, '{"blob":"AQID"}');
    expect(result.blob).toEqual(new Uint8Array([1, 2, 3]));
  });
});
