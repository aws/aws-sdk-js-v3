import { CborCodec } from "@smithy/core/cbor";
import { describe, test as it } from "vitest";

import { createNestingWidget, nestingWidget } from "../test-schema.spec";

describe("performance baseline indicator", () => {
  const codec = new CborCodec();
  const serializer = codec.createSerializer();
  const deserializer = codec.createDeserializer();

  it("should serialize objects", () => {
    const timings: string[] = [];
    const objects = [];

    // warmup
    for (let i = 0; i < 13; ++i) {
      const o = createNestingWidget(2 ** i);
      objects.push(o);
      serializer.write(nestingWidget, o);
      serializer.flush();
    }

    for (let i = 0; i < objects.length; ++i) {
      const o = objects[i];

      const A = performance.now();
      serializer.write(nestingWidget, o);
      const serialization = serializer.flush();
      const B = performance.now();

      timings.push(
        `${B - A} (byte length = ${serialization.byteLength}, ${serialization.byteLength / 1024 / (B - A)} kb/ms)`
      );
    }

    /**
     * No assertion here.
     * In the initial dual-pass implementation,
     * par time is 0 to 10ms for up to 200746 bytes of CBOR. Up to 30 kb/ms. (kuhe's computer)
     */
    console.log("CborShapeSerializer performance timings", timings);
  });

  it("should deserialize bytes", async () => {
    const timings: string[] = [];
    const strings = [];

    // warmup
    for (let i = 0; i < 12; ++i) {
      const o = createNestingWidget(2 ** i);
      serializer.write(nestingWidget, o);
      const json = serializer.flush();
      strings.push(json);
      await deserializer.read(nestingWidget, json);
    }

    for (const s of strings) {
      const A = performance.now();
      await deserializer.read(nestingWidget, s);
      const B = performance.now();

      timings.push(`${B - A} (byte length = ${s.byteLength}, ${s.byteLength / 1024 / (B - A)} kb/ms)`);
    }

    /**
     * No assertion here.
     * In the initial dual-pass implementation,
     * par time is 0 to 3ms for up to 100394 bytes of CBOR. Up to 45 kb/ms. (kuhe's computer)
     */
    console.log("CborShapeDeserializer performance timings", timings);
  });
});
