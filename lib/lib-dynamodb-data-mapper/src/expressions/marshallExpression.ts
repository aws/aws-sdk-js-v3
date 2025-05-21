import { Schema } from '../schema/Schema';
import { toSchemaName } from '../schema/toSchemaName';
import { AttributePath } from './AttributePath';
import { ConditionExpression, serializeConditionExpression } from './ConditionExpression';
import { ExpressionAttributes } from './ExpressionAttributes';
import { FunctionExpression } from './FunctionExpression';
import { MathematicalExpression } from './MathematicalExpression';
import { ProjectionExpression, serializeProjectionExpression } from './ProjectionExpression';
import type {
  ExpressionAttributeNameMap,
  ExpressionAttributeValueMap,
} from './types'
import { UpdateExpression } from './UpdateExpression';

export interface MarshalledExpression {
  expression: string;
  ExpressionAttributeNames: ExpressionAttributeNameMap;
  ExpressionAttributeValues: ExpressionAttributeValueMap;
}

export function marshallConditionExpression(
  expression: ConditionExpression,
  schema: Schema,
  attributes: ExpressionAttributes = new ExpressionAttributes()
): MarshalledExpression {
  const serialized = serializeConditionExpression(
    normalizeConditionExpression(expression, schema),
    attributes
  );
  return {
    expression: serialized,
    ExpressionAttributeNames: attributes.names,
    ExpressionAttributeValues: attributes.values,
  };
}

export function marshallFunctionExpression(
  expression: FunctionExpression,
  schema: Schema,
  attributes: ExpressionAttributes = new ExpressionAttributes()
): MarshalledExpression {
  const serialized = normalizeFunctionExpression(expression, schema).serialize(attributes);
  return {
    expression: serialized,
    ExpressionAttributeNames: attributes.names,
    ExpressionAttributeValues: attributes.values,
  };
}

export function marshallMathematicalExpression(
  expression: MathematicalExpression,
  schema: Schema,
  attributes: ExpressionAttributes = new ExpressionAttributes()
): MarshalledExpression {
  const serialized = normalizeMathematicalExpression(expression, schema).serialize(attributes);
  return {
    expression: serialized,
    ExpressionAttributeNames: attributes.names,
    ExpressionAttributeValues: attributes.values,
  };
}

export function marshallProjectionExpression(
  expression: ProjectionExpression,
  schema: Schema,
  attributes: ExpressionAttributes = new ExpressionAttributes()
): MarshalledExpression {
  const serialized = serializeProjectionExpression(
    expression.map(el => toSchemaName(el, schema)),
    attributes
  );
  return {
    expression: serialized,
    ExpressionAttributeNames: attributes.names,
    ExpressionAttributeValues: attributes.values,
  };
}

export function marshallUpdateExpression(
  expression: UpdateExpression,
  schema: Schema,
  attributes: ExpressionAttributes = new ExpressionAttributes()
): MarshalledExpression {
  const serialized = normalizeUpdateExpression(expression, schema).serialize(attributes);
  return {
    expression: serialized,
    ExpressionAttributeNames: attributes.names,
    ExpressionAttributeValues: attributes.values,
  };
}

function normalizeConditionExpression(
  expression: ConditionExpression,
  schema: Schema
): ConditionExpression {
  if (FunctionExpression.isFunctionExpression(expression)) {
    return normalizeFunctionExpression(expression, schema);
  }

  switch (expression.type) {
    case 'Equals':
    case 'NotEquals':
    case 'LessThan':
    case 'LessThanOrEqualTo':
    case 'GreaterThan':
    case 'GreaterThanOrEqualTo':
      return {
        ...expression,
        subject: toSchemaName(expression.subject, schema),
        object: normalizeIfPath(expression.object, schema),
      };
    case 'Function':
      switch (expression.name) {
                case 'attribute_exists':
                case 'attribute_not_exists':
                    return {
                        ...expression,
                        subject: toSchemaName(expression.subject, schema)
                    };
                case 'attribute_type':
                case 'begins_with':
                case 'contains':
                    return {
                        ...expression,
                        subject: toSchemaName(expression.subject, schema)
                    };
            }
    case 'Between':
      return {
        ...expression,
        subject: toSchemaName(expression.subject, schema),
        lowerBound: normalizeIfPath(expression.lowerBound, schema),
        upperBound: normalizeIfPath(expression.upperBound, schema),
      };
    case 'Membership':
      return {
        ...expression,
        subject: toSchemaName(expression.subject, schema),
        values: expression.values.map(arg => normalizeIfPath(arg, schema)),
      };
    case 'Not':
      return {
        ...expression,
        condition: normalizeConditionExpression(expression.condition, schema),
      };
    case 'And':
    case 'Or':
      return {
        ...expression,
        conditions: expression.conditions.map(cond => normalizeConditionExpression(cond, schema)),
      };
  }
}

function normalizeFunctionExpression(
  expression: FunctionExpression,
  schema: Schema
): FunctionExpression {
  return new FunctionExpression(
    expression.name,
    ...expression.args.map(arg => normalizeIfPath(arg, schema))
  );
}

function normalizeMathematicalExpression(
  expression: MathematicalExpression,
  schema: Schema
): MathematicalExpression {
  return new MathematicalExpression(
    AttributePath.isAttributePath(expression.lhs) || typeof expression.lhs === 'string'
      ? toSchemaName(expression.lhs, schema)
      : expression.lhs,
    expression.operator,
    AttributePath.isAttributePath(expression.rhs) || typeof expression.rhs === 'string'
      ? toSchemaName(expression.rhs, schema)
      : expression.rhs
  );
}

const mapsToTransform: Array<[
  'toAdd' | 'toDelete' | 'toSet',
  'add' | 'delete' | 'set'
]> = [
  ['toAdd', 'add'],
  ['toDelete', 'delete'],
  ['toSet', 'set'],
];

function normalizeUpdateExpression(
  expression: UpdateExpression,
  schema: Schema
): UpdateExpression {
  const normalized = new UpdateExpression();
  for (const [setKey, method] of mapsToTransform) {
    for (const [path, value] of expression[setKey]) {
      normalized[method](toSchemaName(path, schema), value);
    }
  }
  expression.toRemove.forEach(el => normalized.remove(toSchemaName(el, schema)));
  return normalized;
}

function normalizeIfPath(path: any, schema: Schema): any {
  if (AttributePath.isAttributePath(path)) {
    return toSchemaName(path, schema);
  }
  return path;
}