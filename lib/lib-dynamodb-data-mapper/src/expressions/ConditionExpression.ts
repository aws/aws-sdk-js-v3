import {AttributePath} from "./AttributePath";
import {AttributeValue} from "./AttributeValue";
import {ExpressionAttributes} from "./ExpressionAttributes";
import {FunctionExpression} from "./FunctionExpression";

export type ComparisonOperand = AttributePath|AttributeValue|FunctionExpression|any;

export interface BinaryComparisonPredicate {
    /**
     * The value against which the comparison subject will be compared.
     */
    object: ComparisonOperand;
}

/**
 * A comparison predicate asserting that the subject and object are equal.
 */
export interface EqualityExpressionPredicate extends BinaryComparisonPredicate {
    type: 'Equals';
}

/**
 * Create an expression predicate asserting that the subject is equal to the
 * predicate.
 */
export function equals(
    operand: ComparisonOperand
): EqualityExpressionPredicate {
    return {
        type: 'Equals',
        object: operand,
    };
}

/**
 * A comparison predicate asserting that the subject and object are not equal.
 */
export interface InequalityExpressionPredicate extends BinaryComparisonPredicate {
    type: 'NotEquals';
}

export function notEquals(
    operand: ComparisonOperand
): InequalityExpressionPredicate {
    return {
        type: 'NotEquals',
        object: operand,
    }
}

/**
 * A comparison predicate asserting that the subject is less than the object.
 */
export interface LessThanExpressionPredicate extends BinaryComparisonPredicate {
    type: 'LessThan';
}

export function lessThan(
    operand: ComparisonOperand
): LessThanExpressionPredicate {
    return {
        type: 'LessThan',
        object: operand,
    }
}

/**
 * A comparison predicate asserting that the subject is less than or equal to
 * the object.
 */
export interface LessThanOrEqualToExpressionPredicate extends BinaryComparisonPredicate {
    type: 'LessThanOrEqualTo';
}

export function lessThanOrEqualTo(
    operand: ComparisonOperand
): LessThanOrEqualToExpressionPredicate {
    return {
        type: 'LessThanOrEqualTo',
        object: operand,
    }
}

/**
 * A comparison predicate asserting that the subject is greater than the object.
 */
export interface GreaterThanExpressionPredicate extends BinaryComparisonPredicate {
    type: 'GreaterThan';
}

export function greaterThan(
    operand: ComparisonOperand
): GreaterThanExpressionPredicate {
    return {
        type: 'GreaterThan',
        object: operand,
    }
}

/**
 * A comparison predicate asserting that the subject is greater than or equal
 * to the object.
 */
export interface GreaterThanOrEqualToExpressionPredicate extends BinaryComparisonPredicate {
    type: 'GreaterThanOrEqualTo';
}

export function greaterThanOrEqualTo(
    operand: ComparisonOperand
): GreaterThanOrEqualToExpressionPredicate {
    return {
        type: 'GreaterThanOrEqualTo',
        object: operand,
    }
}

/**
 * A comparison predicate asserting that the subject is between two bounds.
 */
export interface BetweenExpressionPredicate {
    type: 'Between';
    lowerBound: ComparisonOperand;
    upperBound: ComparisonOperand;
}

export function between(
    lowerBound: ComparisonOperand,
    upperBound: ComparisonOperand
): BetweenExpressionPredicate {
    return {
        type: 'Between',
        lowerBound,
        upperBound,
    }
}

/**
 * A comparison predicate asserting that the subject is equal to any member of
 * the provided list of values.
 */
export interface MembershipExpressionPredicate {
    type: 'Membership';
    values: Array<ComparisonOperand>;
}

export function inList(
    ...operands: Array<ComparisonOperand>
): MembershipExpressionPredicate {
    return {
        type: 'Membership',
        values: operands,
    }
}

/**
 * An object structure used as the base of all function expression predicates.
 */
export interface BaseFunctionExpressionPredicate {
    type: 'Function';
    name: string;
}

/**
 * A comparison predicate asserting that the subject is contained in a given
 * record.
 */
export interface AttributeExistsPredicate extends
    BaseFunctionExpressionPredicate
{
    name: 'attribute_exists';
}

export function attributeExists(): AttributeExistsPredicate {
    return {
        type: 'Function',
        name: 'attribute_exists',
    };
}


/**
 * A comparison predicate asserting that the subject is **not** contained in a
 * given record.
 */
export interface AttributeNotExistsPredicate extends
    BaseFunctionExpressionPredicate
{
    name: 'attribute_not_exists';
}

export function attributeNotExists(): AttributeNotExistsPredicate {
    return {
        type: 'Function',
        name: 'attribute_not_exists',
    };
}

export type AttributeType = 'S'|'SS'|'N'|'NS'|'B'|'BS'|'BOOL'|'NULL'|'L'|'M';

/**
 * A comparison predicate asserting that the subject is of the specified type.
 */
export interface AttributeTypePredicate extends
    BaseFunctionExpressionPredicate
{
    name: 'attribute_type';
    expected: AttributeType;
}

export function attributeType(expected: AttributeType): AttributeTypePredicate {
    return {
        type: 'Function',
        name: 'attribute_type',
        expected,
    };
}

/**
 * A comparison predicate asserting that the value of the subject in a given
 * record begins with the specified string.
 */
export interface BeginsWithPredicate extends
    BaseFunctionExpressionPredicate
{
    name: 'begins_with';
    expected: string;
}

export function beginsWith(expected: string): BeginsWithPredicate {
    return {
        type: 'Function',
        name: 'begins_with',
        expected,
    };
}

/**
 * A comparison predicate asserting that the value of the subject in a given
 * record contains the specified string.
 */
export interface ContainsPredicate extends
    BaseFunctionExpressionPredicate
{
    name: 'contains';
    expected: string;
}

export function contains(expected: string): ContainsPredicate {
    return {
        type: 'Function',
        name: 'contains',
        expected,
    };
}

export type FunctionExpressionPredicate =
    AttributeExistsPredicate |
    AttributeNotExistsPredicate |
    AttributeTypePredicate |
    BeginsWithPredicate |
    ContainsPredicate;

export type ConditionExpressionPredicate =
    EqualityExpressionPredicate |
    InequalityExpressionPredicate |
    LessThanExpressionPredicate |
    LessThanOrEqualToExpressionPredicate |
    GreaterThanExpressionPredicate |
    GreaterThanExpressionPredicate |
    GreaterThanOrEqualToExpressionPredicate |
    BetweenExpressionPredicate |
    MembershipExpressionPredicate |
    FunctionExpressionPredicate;

/**
 * Evaluate whether the provided value is a condition expression predicate.
 */
export function isConditionExpressionPredicate(
    arg: any
): arg is ConditionExpressionPredicate {
    if (arg && typeof arg === 'object') {
        switch (arg.type) {
            case 'Equals':
            case 'NotEquals':
            case 'LessThan':
            case 'LessThanOrEqualTo':
            case 'GreaterThan':
            case 'GreaterThanOrEqualTo':
                return arg.object !== undefined;
            case 'Between':
                return arg.lowerBound !== undefined
                    && arg.upperBound !== undefined;
            case 'Membership':
                return Array.isArray(arg.values);
            case 'Function':
                switch (arg.name) {
                    case 'attribute_exists':
                    case 'attribute_not_exists':
                        return true;
                    case 'attribute_type':
                    case 'begins_with':
                    case 'contains':
                        return typeof arg.expected === 'string';
                }
        }
    }

    return false;
}

export interface ConditionExpressionSubject {
    /**
     * The path to the item attribute containing the subject of the comparison.
     */
    subject: AttributePath|string;
}

export function isConditionExpressionSubject(
    arg: any
): arg is ConditionExpressionSubject {
    return Boolean(arg)
        && typeof arg === 'object'
        && (typeof arg.subject === 'string' || AttributePath.isAttributePath(arg.subject));
}

export type SimpleConditionExpression = ConditionExpressionSubject &
    ConditionExpressionPredicate;

export type ConditionExpression =
    SimpleConditionExpression |
    AndExpression |
    OrExpression |
    NotExpression |
    FunctionExpression;

/**
 * A comparison expression asserting that all conditions in the provided list
 * are true.
 */
export interface AndExpression {
    type: 'And';
    conditions: Array<ConditionExpression>;
}

/**
 * A comparison expression asserting that one or more conditions in the provided
 * list are true.
 */
export interface OrExpression {
    type: 'Or';
    conditions: Array<ConditionExpression>;
}

/**
 * A comparison expression asserting that the provided condition is not true.
 */
export interface NotExpression {
    type: 'Not';
    condition: ConditionExpression;
}

/**
 * Evaluates whether the provided value is a condition expression.
 */
export function isConditionExpression(arg: any): arg is ConditionExpression {
    if (FunctionExpression.isFunctionExpression(arg)) {
        return true;
    }

    if (Boolean(arg) && typeof arg === 'object') {
        switch (arg.type) {
            case 'Not':
                return isConditionExpression(arg.condition);
            case 'And':
            case 'Or':
                if (Array.isArray(arg.conditions)) {
                    for (const condition of arg.conditions) {
                        if (!isConditionExpression(condition)) {
                            return false;
                        }
                    }

                    return true;
                }

                return false;
            default:
                return isConditionExpressionSubject(arg)
                    && isConditionExpressionPredicate(arg);
        }
    }

    return false;
}

/**
 * Convert the provided condition expression object to a string, escaping any
 * values and attributes to expression-safe placeholders whose expansion value
 * will be managed by the provided ExpressionAttributes object.
 */
export function serializeConditionExpression(
    condition: ConditionExpression,
    attributes: ExpressionAttributes
): string {
    if (FunctionExpression.isFunctionExpression(condition)) {
        return condition.serialize(attributes);
    }

    switch (condition.type) {
        case 'Equals':
            return serializeBinaryComparison(condition, attributes, '=');
        case 'NotEquals':
            return serializeBinaryComparison(condition, attributes, '<>');
        case 'LessThan':
            return serializeBinaryComparison(condition, attributes, '<');
        case 'LessThanOrEqualTo':
            return serializeBinaryComparison(condition, attributes, '<=');
        case 'GreaterThan':
            return serializeBinaryComparison(condition, attributes, '>');
        case 'GreaterThanOrEqualTo':
            return serializeBinaryComparison(condition, attributes, '>=');
        case 'Between':
            return `${
                attributes.addName(condition.subject)
            } BETWEEN ${
                serializeOperand(condition.lowerBound, attributes)
            } AND ${
                serializeOperand(condition.upperBound, attributes)
            }`;
        case 'Membership':
            return `${
                attributes.addName(condition.subject)
            } IN (${
                condition.values.map(val => serializeOperand(val, attributes))
                    .join(', ')
            })`;
        case 'Function':
            const subject = AttributePath.isAttributePath(condition.subject)
                ? condition.subject
                : new AttributePath(condition.subject);

            switch (condition.name) {
                case 'attribute_exists':
                case 'attribute_not_exists':
                    return (new FunctionExpression(condition.name, subject))
                        .serialize(attributes);
                case 'attribute_type':
                case 'begins_with':
                case 'contains':
                    return (new FunctionExpression(
                        condition.name,
                        subject,
                        condition.expected
                    ))
                        .serialize(attributes);
            }
        case 'Not':
            return `NOT (${
                serializeConditionExpression(condition.condition, attributes)
            })`;
        case 'And':
        case 'Or':
            if (condition.conditions.length === 1) {
                return serializeConditionExpression(
                    condition.conditions[0],
                    attributes
                );
            }

            return condition.conditions
                .map(cond => `(${serializeConditionExpression(cond, attributes)})`)
                .join(` ${condition.type.toUpperCase()} `);
    }
}

function serializeBinaryComparison(
    cond: BinaryComparisonPredicate & ConditionExpressionSubject,
    attributes: ExpressionAttributes,
    comparator: string
): string {
    return `${
        attributes.addName(cond.subject)
    } ${comparator} ${
        serializeOperand(cond.object, attributes)
    }`;
}

function serializeOperand(
    operand: ComparisonOperand,
    attributes: ExpressionAttributes
): string {
    if (FunctionExpression.isFunctionExpression(operand)) {
            return operand.serialize(attributes);
    }

    return AttributePath.isAttributePath(operand)
        ? attributes.addName(operand)
        : attributes.addValue(operand);
}
