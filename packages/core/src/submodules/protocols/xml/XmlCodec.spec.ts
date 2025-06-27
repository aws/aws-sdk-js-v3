import { describe, expect, test as it, vi } from "vitest";

import { XmlCodec } from "./XmlCodec";
import { XmlShapeDeserializer } from "./XmlShapeDeserializer";
import { XmlShapeSerializer } from "./XmlShapeSerializer";

describe(XmlCodec.name, () => {
  it("provides a serializer", () => {
    const codec = new XmlCodec({
      serviceNamespace: "",
      httpBindings: true,
      xmlNamespace: "ns",
      timestampFormat: { default: 7, useTrait: false },
    });

    const serializer = codec.createSerializer();
    expect(serializer.settings).toEqual(codec.settings);
  });

  it("provides a deserializer", () => {
    const codec = new XmlCodec({
      serviceNamespace: "",
      httpBindings: true,
      xmlNamespace: "ns",
      timestampFormat: { default: 7, useTrait: false },
    });

    const deserializer = codec.createDeserializer();
    expect(deserializer.settings).toEqual(codec.settings);
  });

  it("propagates serdeContext to its serde providers", () => {
    const codec = new XmlCodec({
      serviceNamespace: "",
      httpBindings: true,
      xmlNamespace: "ns",
      timestampFormat: { default: 7, useTrait: false },
    });

    vi.spyOn(XmlShapeSerializer.prototype, "setSerdeContext");
    vi.spyOn(XmlShapeDeserializer.prototype, "setSerdeContext");
    const serdeContext = {} as any;
    codec.setSerdeContext(serdeContext);
    codec.createSerializer();
    expect(XmlShapeSerializer.prototype.setSerdeContext).toHaveBeenCalledWith(serdeContext);
    codec.createDeserializer();
    expect(XmlShapeDeserializer.prototype.setSerdeContext).toHaveBeenCalledWith(serdeContext);
  });
});
