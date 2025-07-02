import { AttributeBearingExpression } from "./AttributeBearingExpression";
import { AttributePath } from "./AttributePath";
import { AttributeValue } from "./AttributeValue";
import { ExpressionAttributes } from "./ExpressionAttributes";
import { FunctionExpression } from "./FunctionExpression";
import { MathematicalExpression } from "./MathematicalExpression";

/**
 * An object representing a DynamoDB update expression.
 */
export class UpdateExpression implements AttributeBearingExpression {
  readonly toAdd = new Map<AttributePath, any>();
  readonly toDelete = new Map<AttributePath, any>();
  readonly toRemove = new Set<AttributePath>();
  readonly toSet = new Map<AttributePath, any>();

  private readonly attributes: ExpressionAttributes;

  constructor(init?: { attributes?: ExpressionAttributes }) {
    this.attributes = init?.attributes ?? new ExpressionAttributes();
  }

  /**
   * Add a directive to the expression's `add` clause.
   */
  add(path: AttributePath | string, value: any): void {
    this.toAdd.set(AttributePath.isAttributePath(path) ? path : new AttributePath(path), value);
  }

  /**
   * Add a directive to the expression's `delete` clause.
   */
  delete(path: AttributePath | string, value: any): void {
    this.toDelete.set(AttributePath.isAttributePath(path) ? path : new AttributePath(path), value);
  }

  /**
   * Add a directive to the expression's `remove` clause.
   */
  remove(path: AttributePath | string): void {
    this.toRemove.add(AttributePath.isAttributePath(path) ? path : new AttributePath(path));
  }

  /**
   * Add a directive to the expression's `set` clause.
   */
  set(path: AttributePath | string, value: AttributeValue | FunctionExpression | MathematicalExpression | any): void {
    this.toSet.set(AttributePath.isAttributePath(path) ? path : new AttributePath(path), value);
  }

  serialize(attributes: ExpressionAttributes): string {
    const clauses: Array<string> = [];
    const phrases: Array<string> = [];
    for (const [mapping, verb] of [
      [this.toAdd, "ADD"],
      [this.toDelete, "DELETE"],
    ] as Array<[Map<AttributePath, any>, string]>) {
      for (const [key, value] of mapping.entries()) {
        phrases.push(`${attributes.addName(key)} ${attributes.addValue(value)}`);
      }

      if (phrases.length > 0) {
        clauses.push(`${verb} ${phrases.join(", ")}`);
        phrases.length = 0;
      }
    }

    for (const [key, value] of this.toSet.entries()) {
      phrases.push(
        `${attributes.addName(key)} = ${
          FunctionExpression.isFunctionExpression(value) || MathematicalExpression.isMathematicalExpression(value)
            ? value.serialize(attributes)
            : attributes.addValue(value)
        }`
      );
    }
    if (phrases.length > 0) {
      clauses.push(`SET ${phrases.join(", ")}`);
      phrases.length = 0;
    }

    for (const keyToRemove of this.toRemove) {
      phrases.push(attributes.addName(keyToRemove));
    }
    if (phrases.length > 0) {
      clauses.push(`REMOVE ${phrases.join(", ")}`);
      phrases.length = 0;
    }

    return clauses.join(" ");
  }
}
