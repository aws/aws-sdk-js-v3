import { NormalizedSchema } from "@smithy/core/schema";
import type { StaticStructureSchema } from "@smithy/types";
import { describe, expect, test as it, vi } from "vitest";

import { deserializingStructIterator, serializingStructIterator } from "./structIterator";

describe("filtered struct iteration", () => {
  const schema = [
    3,
    "ns",
    "Widget",
    0,
    ["a", "b", "c", /*d,*/ "e", "f", "g", "h", "i", "j", "k", "l"],
    [0, [0, { jsonName: "B" }], [0, { idempotencyToken: 1 }], 0, 0, 0, 0, 0, 0, 0, 0],
  ] satisfies StaticStructureSchema;

  const ns = NormalizedSchema.of(schema);

  describe("in serialization", () => {
    it("should iterate only the keys in the source object and any idempotency tokens", () => {
      expect(
        [
          ...serializingStructIterator(ns, {
            d: "d",
          }),
        ].map(([k]) => k)
      ).toEqual([
        // a is ignored because it is not present and is not an idempotency token
        // b is ignored because it is not present and is not an idempotency token
        "c", // c is iterated because although it is not present, it is an idempotency token
        // d is ignored because although it is present, it is not part of the schema
      ]);
      expect(
        [
          ...serializingStructIterator(ns, {
            a: "a",
            b: "b",
            c: "c",
            d: "d",
          }),
        ].map(([k]) => k)
      ).toEqual(["a", "b", "c"]);
    });
  });

  describe("in deserialization", () => {
    it("should only iterate the keys that exist on the source object, accounting for jsonName", () => {
      expect(
        [
          ...deserializingStructIterator(
            ns,
            {
              B: "B",
              d: "d",
            },
            "jsonName"
          ),
        ].map(([k]) => k)
      ).toEqual([
        // a is ignored because it is not present
        "b", // b is iterated because its jsonName counterpart is present
        // c is ignored because it is not present in the source object.
        //     being an idempotencyToken doesn't mean anything in deserialization.
        // d is ignored because although it is present, it is not part of the schema
      ]);

      expect(
        [
          ...deserializingStructIterator(
            ns,
            {
              a: "a",
              b: "b",
              c: "c",
              d: "d",
            },
            "jsonName"
          ),
        ].map(([k]) => k)
      ).toEqual(["a", "c"]);
      expect(
        [
          ...deserializingStructIterator(
            ns,
            {
              a: "a",
              b: "b",
              c: "c",
              d: "d",
            },
            false
          ),
        ].map(([k]) => k)
      ).toEqual(["a", "b", "c"]);
    });

    it("halts iteration once all keys from the source object have been iterated", () => {
      vi.spyOn(NormalizedSchema.prototype, "getMergedTraits");
      // regular iteration iterates all schema keys
      expect([...ns.structIterator()].map(([k]) => k)).toEqual(["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l"]);
      expect(NormalizedSchema.prototype.getMergedTraits).toHaveBeenCalledTimes(0);

      vi.resetAllMocks();
      expect([...deserializingStructIterator(ns, { a: "a" }, "jsonName")].map(([k]) => k)).toEqual(["a"]);
      // only 1 call because iteration halts after 'a', since the total key count was 1.
      expect(NormalizedSchema.prototype.getMergedTraits).toHaveBeenCalledTimes(1);

      vi.resetAllMocks();
      expect([...deserializingStructIterator(ns, { a: "a", l: "l" }, "jsonName")].map(([k]) => k)).toEqual(["a", "l"]);
      // 11 calls because iteration continues in member order, and 'l' is the last key.
      expect(NormalizedSchema.prototype.getMergedTraits).toHaveBeenCalledTimes(11);

      vi.resetAllMocks();
      expect([...deserializingStructIterator(ns, { a: "a", l: "l" }, false)].map(([k]) => k)).toEqual(["a", "l"]);
      // no calls because no jsonName checking is involved.
      expect(NormalizedSchema.prototype.getMergedTraits).toHaveBeenCalledTimes(0);
    });
  });
});
