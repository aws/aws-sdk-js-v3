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
});
