import { describe, expect, it } from "vitest";

import { AttributePath } from "../../expressions/AttributePath";
import { FunctionExpression } from "../../expressions/FunctionExpression";
import { MathematicalExpression } from "../../expressions/MathematicalExpression";
import { UpdateExpression } from "../../expressions/UpdateExpression";
import { ItemSchema } from "../../schema";
import {
  marshallConditionExpression,
  marshallFunctionExpression,
  marshallMathematicalExpression,
  marshallProjectionExpression,
  marshallUpdateExpression,
} from "./marshallExpression";

const schema: ItemSchema = {
  foo: {
    type: "String",
    attributeName: "bar",
  },
  fizz: {
    type: "Number",
    attributeName: "buzz",
  },
  nested: {
    type: "Document",
    attributeName: "nested_level_1",
    members: {
      nested: {
        type: "Document",
        attributeName: "nested_level_2",
        members: {
          scalar: {
            type: "String",
            attributeName: "nested_scalar",
          },
        },
      },
    },
  },
};
describe("marshallConditionExpression", () => {
  it("should map nested keys to their attributeName equivalents in simple conditions", () => {
    expect(marshallConditionExpression({ type: "Equals", subject: "foo", object: "baz" }, schema)).toEqual({
      expression: "#attr0 = :val1",
      ExpressionAttributeNames: { "#attr0": "bar" },
      ExpressionAttributeValues: { ":val1": { S: "baz" } },
    });
  });

  it("should map nested keys to their attributeName equivalents in bounding conditions", () => {
    expect(
      marshallConditionExpression({ type: "Between", subject: "fizz", lowerBound: 1, upperBound: 5 }, schema)
    ).toEqual({
      expression: "#attr0 BETWEEN :val1 AND :val2",
      ExpressionAttributeNames: { "#attr0": "buzz" },
      ExpressionAttributeValues: {
        ":val1": { N: "1" },
        ":val2": { N: "5" },
      },
    });
  });

  it("should map nested keys to their attributeName equivalents in membership conditions", () => {
    expect(
      marshallConditionExpression({ type: "Membership", subject: "foo", values: ["bar", "baz", "quux"] }, schema)
    ).toEqual({
      expression: "#attr0 IN (:val1, :val2, :val3)",
      ExpressionAttributeNames: { "#attr0": "bar" },
      ExpressionAttributeValues: {
        ":val1": { S: "bar" },
        ":val2": { S: "baz" },
        ":val3": { S: "quux" },
      },
    });
  });

  it("should map nested keys to their attributeName equivalents in negated conditions", () => {
    expect(
      marshallConditionExpression({ type: "Not", condition: { type: "Equals", subject: "foo", object: "baz" } }, schema)
    ).toEqual({
      expression: "NOT (#attr0 = :val1)",
      ExpressionAttributeNames: { "#attr0": "bar" },
      ExpressionAttributeValues: { ":val1": { S: "baz" } },
    });
  });

  it("should map nested keys to their attributeName equivalents in compound conditions", () => {
    expect(
      marshallConditionExpression(
        {
          type: "And",
          conditions: [
            { type: "Equals", subject: "foo", object: "baz" },
            { type: "Between", subject: "fizz", lowerBound: 1, upperBound: 5 },
          ],
        },
        schema
      )
    ).toEqual({
      expression: "(#attr0 = :val1) AND (#attr2 BETWEEN :val3 AND :val4)",
      ExpressionAttributeNames: {
        "#attr0": "bar",
        "#attr2": "buzz",
      },
      ExpressionAttributeValues: {
        ":val1": { S: "baz" },
        ":val3": { N: "1" },
        ":val4": { N: "5" },
      },
    });
  });

  it("should handle function conditions", () => {
    expect(
      marshallConditionExpression(
        new FunctionExpression("attributeExists", new AttributePath("nested.nested.scalar")),
        schema
      )
    ).toEqual({
      expression: "attributeExists(#attr0.#attr1.#attr2)",
      ExpressionAttributeNames: {
        "#attr0": "nested_level_1",
        "#attr1": "nested_level_2",
        "#attr2": "nested_scalar",
      },
      ExpressionAttributeValues: {},
    });

    expect(
      marshallConditionExpression(
        { type: "Function", name: "attribute_exists", subject: "nested.nested.scalar" },
        schema
      )
    ).toEqual({
      expression: "attribute_exists(#attr0.#attr1.#attr2)",
      ExpressionAttributeNames: {
        "#attr0": "nested_level_1",
        "#attr1": "nested_level_2",
        "#attr2": "nested_scalar",
      },
      ExpressionAttributeValues: {},
    });

    expect(
      marshallConditionExpression(
        {
          type: "Function",
          name: "contains",
          subject: "nested.nested.scalar",
          expected: "substr",
        },
        schema
      )
    ).toEqual({
      expression: "contains(#attr0.#attr1.#attr2, :val3)",
      ExpressionAttributeNames: {
        "#attr0": "nested_level_1",
        "#attr1": "nested_level_2",
        "#attr2": "nested_scalar",
      },
      ExpressionAttributeValues: {
        ":val3": { S: "substr" },
      },
    });
  });
});

describe("marshallFunctionExpression", () => {
  it("should map nested keys to their attributeName equivalents", () => {
    expect(
      marshallFunctionExpression(
        new FunctionExpression("attributeExists", new AttributePath("nested.nested.scalar")),
        schema
      )
    ).toEqual({
      expression: "attributeExists(#attr0.#attr1.#attr2)",
      ExpressionAttributeNames: {
        "#attr0": "nested_level_1",
        "#attr1": "nested_level_2",
        "#attr2": "nested_scalar",
      },
      ExpressionAttributeValues: {},
    });
  });

  it("should not map non-path arguments", () => {
    expect(
      marshallFunctionExpression(
        new FunctionExpression("beginsWith", new AttributePath("nested.nested.scalar"), "foo"),
        schema
      )
    ).toEqual({
      expression: "beginsWith(#attr0.#attr1.#attr2, :val3)",
      ExpressionAttributeNames: {
        "#attr0": "nested_level_1",
        "#attr1": "nested_level_2",
        "#attr2": "nested_scalar",
      },
      ExpressionAttributeValues: {
        ":val3": { S: "foo" },
      },
    });
  });
});

describe("marshallMathematicalExpression", () => {
  it("should map nested keys to their attributeName equivalents", () => {
    expect(marshallMathematicalExpression(new MathematicalExpression("fizz", "-", 2), schema)).toEqual({
      expression: "#attr0 - :val1",
      ExpressionAttributeNames: {
        "#attr0": "buzz",
      },
      ExpressionAttributeValues: {
        ":val1": { N: "2" },
      },
    });
  });
});

describe("marshallProjectionExpression", () => {
  it("should map nested keys to their attributeName equivalents", () => {
    expect(marshallProjectionExpression([new AttributePath("nested.nested.scalar"), "fizz"], schema)).toEqual({
      expression: "#attr0.#attr1.#attr2, #attr3",
      ExpressionAttributeNames: {
        "#attr0": "nested_level_1",
        "#attr1": "nested_level_2",
        "#attr2": "nested_scalar",
        "#attr3": "buzz",
      },
      ExpressionAttributeValues: {},
    });
  });
});

describe("marshallUpdateExpression", () => {
  it("should map nested keys to their attributeName equivalents", () => {
    const expr = new UpdateExpression();
    expr.set(new AttributePath("nested.nested.scalar"), "boo");
    expr.add("fizz", 1);
    expr.remove("foo");

    expect(marshallUpdateExpression(expr, schema)).toEqual({
      expression: "ADD #attr0 :val1 SET #attr2.#attr3.#attr4 = :val5 REMOVE #attr6",
      ExpressionAttributeNames: {
        "#attr2": "nested_level_1",
        "#attr3": "nested_level_2",
        "#attr4": "nested_scalar",
        "#attr0": "buzz",
        "#attr6": "bar",
      },
      ExpressionAttributeValues: {
        ":val5": { S: "boo" },
        ":val1": { N: "1" },
      },
    });
  });
});
