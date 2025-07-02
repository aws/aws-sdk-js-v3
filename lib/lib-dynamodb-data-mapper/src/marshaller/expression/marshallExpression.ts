import { AttributePath } from "../../expressions/AttributePath";
import { ConditionExpression, serializeConditionExpression } from "../../expressions/ConditionExpression";
import { ExpressionAttributes } from "../../expressions/ExpressionAttributes";
import { FunctionExpression } from "../../expressions/FunctionExpression";
import { MathematicalExpression } from "../../expressions/MathematicalExpression";
import { ProjectionExpression, serializeProjectionExpression } from "../../expressions/ProjectionExpression";
import type { ExpressionAttributeNameMap, ExpressionAttributeValueMap } from "../../expressions/types";
import { UpdateExpression } from "../../expressions/UpdateExpression";
import { ItemSchema } from "../../schema";
import { toSchemaName } from "./toSchemaName";

/**
 * A DynamoDB expression serialized to a string and accompanied by the name and
 * value substitutions that have been performed during serialization.
 */
export interface MarshalledExpression {
  /**
   * A serialized expression.
   */
  expression: string;

  /**
   * A map of name tokens => the property name for which the token has been
   * substituted in the serialized expression.
   */
  ExpressionAttributeNames: ExpressionAttributeNameMap;

  /**
   * A map of value tokens => the value for which the token has been
   * substituted in the serialized expression.
   */
  ExpressionAttributeValues: ExpressionAttributeValueMap;
}

/**
 * Serialize a condition expression, substituting any property names for the
 * corresponding attribute names in the provided schema.
 *
 * @param expression The expression object to marshall.
 * @param schema The schema of the table to which the expression pertains.
 * @param attributes An optional ExpressionAttributes object to synchronize
 *                      substitutions across multiple expressions.
 */
export function marshallConditionExpression(
  expression: ConditionExpression,
  schema: ItemSchema,
  attributes: ExpressionAttributes = new ExpressionAttributes()
): MarshalledExpression {
  const serialized = serializeConditionExpression(normalizeConditionExpression(expression, schema), attributes);
  return {
    expression: serialized,
    ExpressionAttributeNames: attributes.names,
    ExpressionAttributeValues: attributes.values,
  };
}

/**
 * Serialize a function expression, substituting any property names for the
 * corresponding attribute names in the provided schema.
 *
 * @param expression The expression object to marshall.
 * @param schema The schema of the table to which the expression pertains.
 * @param attributes An optional ExpressionAttributes object to synchronize
 *                      substitutions across multiple expressions.
 */
export function marshallFunctionExpression(
  expression: FunctionExpression,
  schema: ItemSchema,
  attributes: ExpressionAttributes = new ExpressionAttributes()
): MarshalledExpression {
  const serialized = normalizeFunctionExpression(expression, schema).serialize(attributes);
  return {
    expression: serialized,
    ExpressionAttributeNames: attributes.names,
    ExpressionAttributeValues: attributes.values,
  };
}

/**
 * Serialize a mathematical expression, substituting any property names for the
 * corresponding attribute names in the provided schema.
 *
 * @param expression The expression object to marshall.
 * @param schema The schema of the table to which the expression pertains.
 * @param attributes An optional ExpressionAttributes object to synchronize
 *                      substitutions across multiple expressions.
 */
export function marshallMathematicalExpression(
  expression: MathematicalExpression,
  schema: ItemSchema,
  attributes: ExpressionAttributes = new ExpressionAttributes()
): MarshalledExpression {
  const serialized = normalizeMathematicalExpression(expression, schema).serialize(attributes);
  return {
    expression: serialized,
    ExpressionAttributeNames: attributes.names,
    ExpressionAttributeValues: attributes.values,
  };
}

/**
 * Serialize a projection expression, substituting any property names for the
 * corresponding attribute names in the provided schema.
 *
 * @param expression The expression object to marshall.
 * @param schema The schema of the table to which the expression pertains.
 * @param attributes An optional ExpressionAttributes object to synchronize
 *                      substitutions across multiple expressions.
 */
export function marshallProjectionExpression(
  expression: ProjectionExpression,
  schema: ItemSchema,
  attributes: ExpressionAttributes = new ExpressionAttributes()
): MarshalledExpression {
  const serialized = serializeProjectionExpression(
    expression.map((el) => toSchemaName(el, schema)),
    attributes
  );
  return {
    expression: serialized,
    ExpressionAttributeNames: attributes.names,
    ExpressionAttributeValues: attributes.values,
  };
}

/**
 * Serialize an update expression, substituting any property names for the
 * corresponding attribute names in the provided schema.
 *
 * @param expression The expression object to marshall.
 * @param schema The schema of the table to which the expression pertains.
 * @param attributes An optional ExpressionAttributes object to synchronize
 *                      substitutions across multiple expressions.
 */
export function marshallUpdateExpression(
  expression: UpdateExpression,
  schema: ItemSchema,
  attributes: ExpressionAttributes = new ExpressionAttributes()
): MarshalledExpression {
  const serialized = normalizeUpdateExpression(expression, schema).serialize(attributes);
  return {
    expression: serialized,
    ExpressionAttributeNames: attributes.names,
    ExpressionAttributeValues: attributes.values,
  };
}

function normalizeConditionExpression(expression: ConditionExpression, schema: ItemSchema): ConditionExpression {
  if (FunctionExpression.isFunctionExpression(expression)) {
    return normalizeFunctionExpression(expression, schema);
  }

  switch (expression.type) {
    case "Equals":
    case "NotEquals":
    case "LessThan":
    case "LessThanOrEqualTo":
    case "GreaterThan":
    case "GreaterThanOrEqualTo":
      return {
        ...expression,
        subject: toSchemaName(expression.subject, schema),
        object: normalizeIfPath(expression.object, schema),
      };
    case "Function":
      switch (expression.name) {
        case "attribute_exists":
        case "attribute_not_exists":
          return {
            ...expression,
            subject: toSchemaName(expression.subject, schema),
          };
        case "attribute_type":
        case "begins_with":
        case "contains":
          return {
            ...expression,
            subject: toSchemaName(expression.subject, schema),
          };
      }
    case "Between":
      return {
        ...expression,
        subject: toSchemaName(expression.subject, schema),
        lowerBound: normalizeIfPath(expression.lowerBound, schema),
        upperBound: normalizeIfPath(expression.upperBound, schema),
      };
    case "Membership":
      return {
        ...expression,
        subject: toSchemaName(expression.subject, schema),
        values: expression.values.map((arg) => normalizeIfPath(arg, schema)),
      };
    case "Not":
      return {
        ...expression,
        condition: normalizeConditionExpression(expression.condition, schema),
      };
    case "And":
    case "Or":
      return {
        ...expression,
        conditions: expression.conditions.map((cond) => normalizeConditionExpression(cond, schema)),
      };
  }
}

function normalizeFunctionExpression(expression: FunctionExpression, schema: ItemSchema): FunctionExpression {
  return new FunctionExpression(expression.name, ...expression.args.map((arg) => normalizeIfPath(arg, schema)));
}

function normalizeMathematicalExpression(
  expression: MathematicalExpression,
  schema: ItemSchema
): MathematicalExpression {
  return new MathematicalExpression(
    AttributePath.isAttributePath(expression.lhs) || typeof expression.lhs === "string"
      ? toSchemaName(expression.lhs, schema)
      : expression.lhs,
    expression.operator,
    AttributePath.isAttributePath(expression.rhs) || typeof expression.rhs === "string"
      ? toSchemaName(expression.rhs, schema)
      : expression.rhs
  );
}

const mapsToTransform: Array<["toAdd" | "toDelete" | "toSet", "add" | "delete" | "set"]> = [
  ["toAdd", "add"],
  ["toDelete", "delete"],
  ["toSet", "set"],
];

function normalizeUpdateExpression(expression: UpdateExpression, schema: ItemSchema): UpdateExpression {
  const normalized = new UpdateExpression();
  for (const [setKey, method] of mapsToTransform) {
    for (const [path, value] of expression[setKey]) {
      normalized[method](toSchemaName(path, schema), value);
    }
  }
  expression.toRemove.forEach((el) => normalized.remove(toSchemaName(el, schema)));
  return normalized;
}

function normalizeIfPath(path: any, schema: ItemSchema): any {
  if (AttributePath.isAttributePath(path)) {
    return toSchemaName(path, schema);
  }
  return path;
}
