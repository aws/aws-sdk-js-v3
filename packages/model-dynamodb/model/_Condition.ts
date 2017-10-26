import {_AttributeValueList} from './_AttributeValueList';
import {Structure as _Structure_} from '@aws/types';

export const _Condition: _Structure_ = {
    type: 'structure',
    required: [
        'ComparisonOperator',
    ],
    members: {
        AttributeValueList: {
            shape: _AttributeValueList,
        },
        ComparisonOperator: {
            shape: {
                type: 'string',
            },
        },
    },
};