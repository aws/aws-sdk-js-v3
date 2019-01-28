import {Map as _Map_} from '@aws-sdk/types';
import {_AttributeDimension} from './_AttributeDimension';

export const _MapOfAttributeDimension: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
        },
    },
    value: {
        shape: _AttributeDimension,
    },
};