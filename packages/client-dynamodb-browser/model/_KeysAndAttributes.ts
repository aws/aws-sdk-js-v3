import {_KeyList} from './_KeyList';
import {_AttributeNameList} from './_AttributeNameList';
import {_ExpressionAttributeNameMap} from './_ExpressionAttributeNameMap';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _KeysAndAttributes: _Structure_ = {
    type: 'structure',
    required: [
        'Keys',
    ],
    members: {
        Keys: {
            shape: _KeyList,
        },
        AttributesToGet: {
            shape: _AttributeNameList,
        },
        ConsistentRead: {
            shape: {
                type: 'boolean',
            },
        },
        ProjectionExpression: {
            shape: {
                type: 'string',
            },
        },
        ExpressionAttributeNames: {
            shape: _ExpressionAttributeNameMap,
        },
    },
};