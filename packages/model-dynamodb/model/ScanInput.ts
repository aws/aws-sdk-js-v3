import {_AttributeNameList} from './_AttributeNameList';
import {_FilterConditionMap} from './_FilterConditionMap';
import {_Key} from './_Key';
import {_ExpressionAttributeNameMap} from './_ExpressionAttributeNameMap';
import {_ExpressionAttributeValueMap} from './_ExpressionAttributeValueMap';
import {Structure as _Structure_} from '@aws/types';

export const ScanInput: _Structure_ = {
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
        AttributesToGet: {
            shape: _AttributeNameList,
        },
        Limit: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        Select: {
            shape: {
                type: 'string',
            },
        },
        ScanFilter: {
            shape: _FilterConditionMap,
        },
        ConditionalOperator: {
            shape: {
                type: 'string',
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
        TotalSegments: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        Segment: {
            shape: {
                type: 'integer',
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
        ExpressionAttributeNames: {
            shape: _ExpressionAttributeNameMap,
        },
        ExpressionAttributeValues: {
            shape: _ExpressionAttributeValueMap,
        },
        ConsistentRead: {
            shape: {
                type: 'boolean',
            },
        },
    },
};