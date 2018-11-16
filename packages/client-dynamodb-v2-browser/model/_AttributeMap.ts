import {Map as _Map_} from '@aws-sdk/types';
import {_AttributeValue} from './_AttributeValue';

export const _AttributeMap: _Map_ = {
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