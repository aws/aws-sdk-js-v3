import {_Key} from './_Key';
import {_ExpectedAttributeMap} from './_ExpectedAttributeMap';
import {_ExpressionAttributeNameMap} from './_ExpressionAttributeNameMap';
import {_ExpressionAttributeValueMap} from './_ExpressionAttributeValueMap';
import {Structure as _Structure_} from '@aws-sdk/types';

export const DeleteItemInput: _Structure_ = {
    type: 'structure',
    required: [
        'TableName',
        'Key',
    ],
    members: {
        TableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        Key: {
            shape: _Key,
        },
        Expected: {
            shape: _ExpectedAttributeMap,
        },
        ConditionalOperator: {
            shape: {
                type: 'string',
            },
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