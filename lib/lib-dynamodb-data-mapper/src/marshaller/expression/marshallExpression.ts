import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { ExpressionAttributes, ExpressionNode } from "../../expressions/";
import { ItemSchema } from "../../schema/";
import { ExpressionSerializer } from "./expressionSerializer";

export interface MarshalledExpression {
  expression: string;
  ExpressionAttributeNames: Record<string, string>;
  ExpressionAttributeValues: Record<string, AttributeValue>;
}

export function marshallExpression(
  expr: ExpressionNode,
  schema: ItemSchema,
  attributes = new ExpressionAttributes()
): MarshalledExpression {
  const visitor = new ExpressionSerializer(attributes, schema);
  const expression = visitor.visit(expr);
  return {
    expression,
    ExpressionAttributeNames: attributes.names,
    ExpressionAttributeValues: attributes.values,
  };
}
