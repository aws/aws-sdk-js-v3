import {_AttributeValue} from './_AttributeValue';
import {_AttributeValueList} from './_AttributeValueList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _ExpectedAttributeValue: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Value: {
            shape: _AttributeValue,
        },
        Exists: {
            shape: {
                type: 'boolean',
            },
        },
        ComparisonOperator: {
            shape: {
                type: 'string',
            },
        },
        AttributeValueList: {
            shape: _AttributeValueList,
        },
    },
};