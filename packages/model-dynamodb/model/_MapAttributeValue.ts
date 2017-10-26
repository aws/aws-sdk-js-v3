import {Map as _Map_} from '@aws/types';
import {_AttributeValue} from './_AttributeValue';

export const _MapAttributeValue: _Map_ = {
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