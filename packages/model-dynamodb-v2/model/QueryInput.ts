import {_AttributeNameList} from './_AttributeNameList';
import {_KeyConditions} from './_KeyConditions';
import {_FilterConditionMap} from './_FilterConditionMap';
import {_Key} from './_Key';
import {_ExpressionAttributeNameMap} from './_ExpressionAttributeNameMap';
import {_ExpressionAttributeValueMap} from './_ExpressionAttributeValueMap';
import {Structure as _Structure_} from '@aws/types';

export const QueryInput: _Structure_ = {
    type: 'structure',
    required: [
        'TableName',
    ],
    members: {
        TableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        IndexName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        Select: {
            shape: {
                type: 'string',
            },
        },
        AttributesToGet: {
            shape: _AttributeNameList,
        },
        Limit: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        ConsistentRead: {
            shape: {
                type: 'boolean',
            },
        },
        KeyConditions: {
            shape: _KeyConditions,
        },
        QueryFilter: {
            shape: _FilterConditionMap,
        },
        ConditionalOperator: {
            shape: {
                type: 'string',
            },
        },
        ScanIndexForward: {
            shape: {
                type: 'boolean',
            },
        },
        ExclusiveStartKey: {
            shape: _Key,
        },
        ReturnConsumedCapacity: {
            shape: {
                type: 'string',
            },
        },
        ProjectionExpression: {
            shape: {
                type: 'string',
            },
        },
        FilterExpression: {
            shape: {
                type: 'string',
            },
        },
        KeyConditionExpression: {
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