import {Map as _Map_, Member as _Member_} from '@aws-sdk/types';
import {_AttributeValue} from './_AttributeValue';

export const _MapAttributeValue: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
        },
    },
    get value(): _Member_ {
        Object.defineProperty(_MapAttributeValue, 'value', {value: {
            shape: _AttributeValue,
        }});
        return {
            shape: _AttributeValue,
        };
    },
};