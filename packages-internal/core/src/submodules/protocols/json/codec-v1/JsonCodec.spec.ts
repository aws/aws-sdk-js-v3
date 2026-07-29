import { describe, expect, test as it, vi } from "vitest";

import { JsonCodec } from "./JsonCodec";
import { JsonShapeDeserializer } from "./JsonShapeDeserializer";
import { JsonShapeSerializer } from "./JsonShapeSerializer";

describe(JsonCodec.name, () => {
  it("provides a serializer", () => {
    const codec = new JsonCodec({
      jsonName: false,
      timestampFormat: { default: 7, useTrait: false },
    });

    const serializer = codec.createSerializer();
    expect(serializer.settings).toEqual(codec.settings);
  });

  it("provides a deserializer", () => {
    const codec = new JsonCodec({
      jsonName: false,
      timestampFormat: { default: 7, useTrait: false },
    });

    const deserializer = codec.createDeserializer();
    expect(deserializer.settings).toEqual(codec.settings);
  });

  it("propagates serdeContext to its serde providers", () => {
    const codec = new JsonCodec({
      jsonName: false,
      timestampFormat: { default: 7, useTrait: false },
    });

    vi.spyOn(JsonShapeSerializer.prototype, "setSerdeContext");
    vi.spyOn(JsonShapeDeserializer.prototype, "setSerdeContext");
    const serdeContext = {} as any;
    codec.setSerdeContext(serdeContext);
    codec.createSerializer();
    expect(JsonShapeSerializer.prototype.setSerdeContext).toHaveBeenCalledWith(serdeContext);
    codec.createDeserializer();
    expect(JsonShapeDeserializer.prototype.setSerdeContext).toHaveBeenCalledWith(serdeContext);
  });
});
