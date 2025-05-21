import {ExpressionAttributes} from "./ExpressionAttributes";

export interface AttributeBearingExpression {
    /**
     * Convert the function expression represented by this object into the
     * string format expected by DynamoDB. Any attribute names and values
     * will be replaced with substitutions supplied by the provided
     * ExpressionAttributes object.
     */
    serialize(attributes: ExpressionAttributes): string;
}
