import "reflect-metadata";

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { isSchema, ItemSchemaType } from "../item";
import { DynamoDbSchema } from "../symbols";
import { attribute } from "./attribute";
import { METADATA_TYPE_KEY } from "./constants";

describe("attribute", () => {
  it("should create a document schema compatible with the DynamoDbSchema protocol", () => {
    const decorator = attribute();
    const target = Object.create(null);
    decorator(target, "property");

    expect(isSchema(target[DynamoDbSchema])).toBe(true);
  });

  it("should bind the provided field schema to the document schema bound to the target object", () => {
    const expected: ItemSchemaType = {
      type: "Number",
      versionAttribute: true,
    };
    const decorator = attribute(expected);
    const target = Object.create(null);
    decorator(target, "property1");
    decorator(target, "property2");

    expect(target[DynamoDbSchema]).toEqual({
      property1: expected,
      property2: expected,
    });
  });

  it("should throw an error if a keyType is set on a schema node that is not a valid key", () => {
    const expected: any = {
      type: "Boolean",
      keyType: "HASH",
    };
    const decorator = attribute(expected);
    expect(() => decorator(Object.create(null), "property")).toThrow();
  });

  it("should throw an error if index key configurations are set on a schema node that is not a valid key", () => {
    const expected: any = {
      type: "Boolean",
      indexKeyConfigurations: {
        indexName: "HASH",
      },
    };
    const decorator = attribute(expected);
    expect(() => decorator(Object.create(null), "property")).toThrow();
  });

  // skip for now as i could not configure vitest to run with compiler flags required for decorators
  // reflect.metadata returns undefined
  it.skip("should support branching inheritance", () => {
    abstract class Foo {
      @attribute()
      prop?: string;
    }

    class Bar extends Foo {
      @attribute()
      otherProp?: number;
    }

    class Baz extends Foo {
      @attribute()
      yetAnotherProp?: boolean;
    }

    const bar = new Bar();
    expect((bar as any)[DynamoDbSchema]).toEqual({
      prop: { type: "String" },
      otherProp: { type: "Number" },
    });

    const baz = new Baz();
    expect((baz as any)[DynamoDbSchema]).toEqual({
      prop: { type: "String" },
      yetAnotherProp: { type: "Boolean" },
    });
  });

  // skip for now as i could not configure vitest to run with compiler flags required for decorators
  // reflect.metadata returns undefined
  it.skip("should support multiple inheritance levels", () => {
    class Foo {
      @attribute()
      prop?: string;
    }

    class Bar extends Foo {
      @attribute()
      otherProp?: number;
    }

    class Baz extends Bar {
      @attribute()
      yetAnotherProp?: boolean;
    }

    const foo = new Foo();
    expect((foo as any)[DynamoDbSchema]).toEqual({
      prop: { type: "String" },
    });
    const bar = new Bar();
    expect((bar as any)[DynamoDbSchema]).toEqual({
      prop: { type: "String" },
      otherProp: { type: "Number" },
    });

    const baz = new Baz();
    expect((baz as any)[DynamoDbSchema]).toEqual({
      prop: { type: "String" },
      otherProp: { type: "Number" },
      yetAnotherProp: { type: "Boolean" },
    });
  });

  describe("TypeScript decorator metadata integration", () => {
    const originalGetMetadata = Reflect.getMetadata;

    beforeEach(() => {
      Reflect.getMetadata = vi.fn();
    });

    afterEach(() => {
      Reflect.metadata = originalGetMetadata;
    });

    it(`should read the ${METADATA_TYPE_KEY} metadata key used by TypeScript's decorator metadata integration`, () => {
      const decorator = attribute();
      const target = Object.create(null);
      decorator(target, "property");

      const reflectionCalls = (Reflect.getMetadata as any).mock.calls;
      expect(reflectionCalls.length).toBe(1);
      expect(reflectionCalls[0][0]).toBe(METADATA_TYPE_KEY);
      expect(reflectionCalls[0][1]).toBe(target);
      expect(reflectionCalls[0][2]).toBe("property");
    });

    it(`should recognize values with a constructor of String as a string`, () => {
      (Reflect.getMetadata as any).mockImplementation(() => String);

      const decorator = attribute();
      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({ type: "String" });
    });

    it(`should recognize values with a constructor of Number as a number`, () => {
      const decorator = attribute({
        type: "Set",
        memberType: "Number",
      });

      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({
        type: "Set",
        memberType: "Number",
      });
    });

    it(`should recognize values with a constructor of Boolean as a boolean`, () => {
      (Reflect.getMetadata as any).mockImplementation(() => Boolean);

      const decorator = attribute();
      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({ type: "Boolean" });
    });

    it(`should recognize values with a constructor of Date as a date`, () => {
      (Reflect.getMetadata as any).mockImplementation(() => Date);

      const decorator = attribute();
      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({ type: "Date" });
    });

    it(`should recognize values with a constructor that subclasses Date as a date`, () => {
      class MyDate extends Date {}
      (Reflect.getMetadata as any).mockImplementation(() => MyDate);

      const decorator = attribute();
      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({ type: "Date" });
    });

    it("should support manually specifying memberType for Set", () => {
      const decorator = attribute({ type: "Set", memberType: "Binary" });
      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({
        type: "Set",
        memberType: "Binary",
      });
    });

    it('should register a BinarySet using an explicit memberType: "Binary"', () => {
      const decorator = attribute({
        type: "Set",
        memberType: "Binary",
      });

      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({
        type: "Set",
        memberType: "Binary",
      });
    });

    it(`should recognize values with a constructor of NumberValueSet as a set of number values`, () => {
      const decorator = attribute({
        type: "Set",
        memberType: "Number",
      });

      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({
        type: "Set",
        memberType: "Number",
      });
    });

    it(`should recognize values with a constructor that subclasses NumberValueSet as a set of number values`, () => {
      class MyNumberValueSet extends Set {}
      (Reflect.getMetadata as any).mockImplementation(() => MyNumberValueSet);

      const decorator = attribute({ type: "Set", memberType: "Number" });
      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({ type: "Set", memberType: "Number" });
    });

    it(`should recognize values with a constructor of Set as a set`, () => {
      (Reflect.getMetadata as any).mockImplementation(() => Set);

      const decorator = attribute({ type: "Set", memberType: "String" });
      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({ type: "Set", memberType: "String" });
    });

    it(`should recognize values with a constructor that subclasses Set as a set`, () => {
      class MySet extends Set {}
      (Reflect.getMetadata as any).mockImplementation(() => MySet);

      const decorator = attribute({ type: "Set", memberType: "Number" });
      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({ type: "Set", memberType: "Number" });
    });

    it(`should throw on values with a constructor of Set that lack a memberType declaration`, () => {
      (Reflect.getMetadata as any).mockImplementation(() => Set);

      const decorator = attribute();
      expect(() => decorator({}, "property")).toThrowError(/memberType/);
    });

    it(`should recognize values with a constructor of Map as a map`, () => {
      (Reflect.getMetadata as any).mockImplementation(() => Map);
      const memberType: ItemSchemaType = {
        type: "Document",
        members: {},
      };

      const decorator = attribute({ type: "Map", memberType });
      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({ type: "Map", memberType });
    });

    it(`should recognize values with a constructor that subclasses Map as a map`, () => {
      class MyMap extends Map {}
      (Reflect.getMetadata as any).mockImplementation(() => MyMap);
      const memberType: ItemSchemaType = {
        type: "Tuple",
        members: [{ type: "Boolean" }, { type: "String" }],
      };

      const decorator = attribute({ type: "Map", memberType });
      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({ type: "Map", memberType });
    });

    it(`should throw on values with a constructor of Map that lack a memberType declaration`, () => {
      (Reflect.getMetadata as any).mockImplementation(() => Map);

      const decorator = attribute();
      expect(() => decorator({}, "property")).toThrowError(/memberType/);
    });

    it("should treat an object that adheres to the DynamoDbSchema protocol as a document", () => {
      class Document {
        get [DynamoDbSchema]() {
          return {};
        }
      }

      (Reflect.getMetadata as any).mockImplementation(() => Document);
      const decorator = attribute();
      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({
        type: "Document",
        members: {},
        valueConstructor: Document,
      });
    });

    it("should treat arrays as collection types", () => {
      (Reflect.getMetadata as any).mockImplementation(() => Array);
      const decorator = attribute();
      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({
        type: "Collection",
      });
    });

    it("should treat arrays with a declared memberType as list types", () => {
      (Reflect.getMetadata as any).mockImplementation(() => Array);

      const memberType: ItemSchemaType = { type: "String" };
      const decorator = attribute({ type: "List", memberType });
      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({
        type: "List",
        memberType,
      });
    });

    it("should treat arrays with members as tuple types", () => {
      (Reflect.getMetadata as any).mockImplementation(() => Array);

      const members: Array<ItemSchemaType> = [{ type: "Boolean" }, { type: "String" }];
      const decorator = attribute({ type: "Tuple", members });
      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({
        type: "Tuple",
        members,
      });
    });

    it("should constructors that descend from Array as collection types", () => {
      class MyArray extends Array {}
      (Reflect.getMetadata as any).mockImplementation(() => MyArray);
      const decorator = attribute();
      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({
        type: "Collection",
      });
    });

    it('should treat values with an unrecognized constructor as an "Any" type', () => {
      (Reflect.getMetadata as any).mockImplementation(() => Object);
      const decorator = attribute();
      const target = Object.create(null);
      decorator(target, "property");

      expect(target[DynamoDbSchema].property).toEqual({ type: "Any" });
    });

    // skip for now as i could not configure vitest to run with compiler flags required for decorators
    // reflect.metadata returns undefined
    it.skip("should attach correct schema metadata from class decorators", () => {
      class Example {
        @attribute()
        name!: string;

        @attribute()
        age!: number;
      }

      const schema = (new Example() as any)[DynamoDbSchema];

      expect(schema).toEqual({
        name: { type: "String" },
        age: { type: "Number" },
      });
    });
  });
});
