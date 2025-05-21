import {AttributeValue as BaseAttributeValue} from '@aws-sdk/client-dynamodb';

const MARSHALLED_ATTRIBUTE_VALUE_TAG = 'AmazonDynamoDbAttributeValue';
const EXPECTED_TOSTRING = `[object ${MARSHALLED_ATTRIBUTE_VALUE_TAG}]`;

/**
 * An object containing an already-marshalled DynamoDB AttributeValue.
 * Intended to allow marshalled AttributeValues to be identified as such
 * and distinguished from maps that resemble marshalled values.
 */
export class AttributeValue {
    readonly [Symbol.toStringTag] = MARSHALLED_ATTRIBUTE_VALUE_TAG;

    constructor(
        public readonly marshalled: BaseAttributeValue
    ) {}

    static isAttributeValue(arg: any): arg is AttributeValue {
        return arg instanceof AttributeValue
            || Object.prototype.toString.call(arg) === EXPECTED_TOSTRING;
    }
}
