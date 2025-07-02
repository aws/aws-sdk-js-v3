import { ConditionExpression, ExpressionNode, FunctionExpression, isConditionExpression } from "../../expressions";
import {} from "../../expressions";
import { ExpressionAttributes } from "../../expressions/ExpressionAttributes";
import { ItemSchema } from "../../schema";

export class ExpressionSerializer {
  constructor(
    private readonly attributes: ExpressionAttributes,
    private readonly schema?: ItemSchema // optional, in case needed later
  ) {}

  visit(expr: ExpressionNode): string {
    if (isConditionExpression(expr)) {
      switch (expr.type) {
        case "Equals":
          return this.visitEquals(expr);
        case "NotEquals":
          return this.visitNotEquals(expr);
        case "LessThan":
          return this.visitLessThan(expr);
        case "LessThanOrEqualTo":
          return this.visitLessThanOrEqualTo(expr);
        case "GreaterThan":
          return this.visitGreaterThan(expr);
        case "GreaterThanOrEqualTo":
          return this.visitGreaterThanOrEqualTo(expr);
        case "Function": {
          if (FunctionExpression.isFunctionExpression(expr)) {
            return this.visitFunctionExpression(expr);
          }
          throw new Error("Invalid FunctionExpression node: expected class instance");
        }
        // More to be added below
        default:
          throw new Error(`Unsupported condition expression type: ${expr.type}`);
      }
    }
    throw new Error(`Unsupported expression node: ${expr.constructor.name}`);
  }

  private visitEquals(expr: Extract<ConditionExpression, { type: "Equals" }>): string {
    const attrName = this.attributes.addName(expr.subject);
    const attrValue = this.attributes.addValue(expr.object);
    return `${attrName} = ${attrValue}`;
  }

  private visitNotEquals(expr: Extract<ConditionExpression, { type: "NotEquals" }>): string {
    const attrName = this.attributes.addName(expr.subject);
    const attrValue = this.attributes.addValue(expr.object);
    return `${attrName} <> ${attrValue}`;
  }

  private visitLessThan(expr: Extract<ConditionExpression, { type: "LessThan" }>): string {
    const attrName = this.attributes.addName(expr.subject);
    const attrValue = this.attributes.addValue(expr.object);
    return `${attrName} < ${attrValue}`;
  }

  private visitLessThanOrEqualTo(expr: Extract<ConditionExpression, { type: "LessThanOrEqualTo" }>): string {
    const attrName = this.attributes.addName(expr.subject);
    const attrValue = this.attributes.addValue(expr.object);
    return `${attrName} <= ${attrValue}`;
  }

  private visitGreaterThan(expr: Extract<ConditionExpression, { type: "GreaterThan" }>): string {
    const attrName = this.attributes.addName(expr.subject);
    const attrValue = this.attributes.addValue(expr.object);
    return `${attrName} > ${attrValue}`;
  }

  private visitGreaterThanOrEqualTo(expr: Extract<ConditionExpression, { type: "GreaterThanOrEqualTo" }>): string {
    const attrName = this.attributes.addName(expr.subject);
    const attrValue = this.attributes.addValue(expr.object);
    return `${attrName} >= ${attrValue}`;
  }

  private visitFunctionExpression(expr: FunctionExpression): string {
    return expr.serialize(this.attributes);
  }
}
