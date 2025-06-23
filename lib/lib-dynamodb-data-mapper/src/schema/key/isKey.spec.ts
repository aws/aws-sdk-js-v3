import { describe, expect, it } from "vitest";

import { SchemaType, TypeTag } from "../../schema";
import { isKey } from "./isKey";

const keyableTypes: Array<TypeTag> = ["Binary", "Custom", "Date", "Number", "String"];

const unkeyableTypes: Array<TypeTag> = [
  "Any",
  "Boolean",
  "Collection",
  "Document",
  "Hash",
  "List",
  "Map",
  "Null",
  "Set",
  "Tuple",
];

describe("isKey", () => {
  for (const notKeyType of unkeyableTypes) {
    it(`should return false if the field is of type ${notKeyType}`, () => {
      expect(isKey({ type: notKeyType, keyType: "HASH" } as SchemaType)).toBe(false);
    });
  }

  for (const keyType of keyableTypes) {
    it(`should return false if the field is of type ${keyType}`, () => {
      expect(isKey({ type: keyType, keyType: "HASH" } as SchemaType)).toBe(true);
    });
  }

  it("should return true if the field is an index key and the index name was supplied", () => {
    expect(isKey({ type: "String", indexKeyConfigurations: { foo: "HASH" } }, "foo")).toBe(true);
  });

  it("should return false if the field is an index key and no index name was supplied", () => {
    expect(isKey({ type: "String", indexKeyConfigurations: { foo: "HASH" } })).toBe(false);
  });

  it("should return false if the field is an index key and a different index name was supplied", () => {
    expect(isKey({ type: "String", indexKeyConfigurations: { foo: "HASH" } }, "bar")).toBe(false);
  });

  it("should return false if the field is a table key and an index name was supplied", () => {
    expect(isKey({ type: "String", keyType: "HASH" }, "foo")).toBe(false);
  });

  it("should return true if the field is both a table and an index key", () => {
    expect(
      isKey(
        {
          type: "String",
          keyType: "HASH",
          indexKeyConfigurations: { foo: "HASH" },
        },
        "foo"
      )
    ).toBe(true);
  });
});
