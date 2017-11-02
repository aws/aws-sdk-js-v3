import {Map as _Map_} from '@aws/types';
import {_AttributeValue} from './_AttributeValue';

export const _ExpressionAttributeValueMap: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
        },
    },
    value: {
        shape: _AttributeValue,
    },
};