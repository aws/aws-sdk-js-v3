import {AttributeBearingExpression} from "./AttributeBearingExpression";
import {AttributePath} from "./AttributePath";
import {ExpressionAttributes} from "./ExpressionAttributes";
import {FunctionExpression} from "./FunctionExpression";

export type MathematicalExpressionOperand = AttributePath|FunctionExpression|string|number;

const MATHEMATICAL_EXPRESSION_TAG = 'AmazonDynamoDbMathematicalExpression';
const EXPECTED_TOSTRING = `[object ${MATHEMATICAL_EXPRESSION_TAG}]`;

/**
 * An object representing a DynamoDB function expression.
 */
export class MathematicalExpression implements AttributeBearingExpression {
    readonly [Symbol.toStringTag] = MATHEMATICAL_EXPRESSION_TAG;

    constructor(
        readonly lhs: MathematicalExpressionOperand,
        readonly operator: '+'|'-',
        readonly rhs: MathematicalExpressionOperand
    ) {}

    serialize(attributes: ExpressionAttributes) {
        const safeArgs = [this.lhs, this.rhs].map(
            arg => {
                if (FunctionExpression.isFunctionExpression(arg)) {
                    return arg.serialize(attributes);
                }
                return AttributePath.isAttributePath(arg) || typeof arg === 'string'
                    ? attributes.addName(arg)
                    : attributes.addValue(arg);
            }
        );
        return `${safeArgs[0]} ${this.operator} ${safeArgs[1]}`;
    }

    /**
     * Evaluate whether the provided value is a MathematicalExpression object.
     */
    static isMathematicalExpression(arg: any): arg is MathematicalExpression {
        return arg instanceof MathematicalExpression
            || Object.prototype.toString.call(arg) === EXPECTED_TOSTRING;
    }
}
