import {_PutItemInputAttributeMap} from './_PutItemInputAttributeMap';
import {_ExpectedAttributeMap} from './_ExpectedAttributeMap';
import {_ExpressionAttributeNameMap} from './_ExpressionAttributeNameMap';
import {_ExpressionAttributeValueMap} from './_ExpressionAttributeValueMap';
import {Structure as _Structure_} from '@aws/types';

export const PutItemInput: _Structure_ = {
    type: 'structure',
    required: [
        'TableName',
        'Item',
    ],
    members: {
        TableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        Item: {
            shape: _PutItemInputAttributeMap,
        },
        Expected: {
            shape: _ExpectedAttributeMap,
        },
        ReturnValues: {
            shape: {
                type: 'string',
            },
        },
        ReturnConsumedCapacity: {
            shape: {
                type: 'string',
            },
        },
        ReturnItemCollectionMetrics: {
            shape: {
                type: 'string',
            },
        },
        ConditionalOperator: {
            shape: {
                type: 'string',
            },
        },
        ConditionExpression: {
            shape: {
                type: 'string',
            },
        },
        ExpressionAttributeNames: {
            shape: _ExpressionAttributeNameMap,
        },
        ExpressionAttributeValues: {
            shape: _ExpressionAttributeValueMap,
        },
    },
};