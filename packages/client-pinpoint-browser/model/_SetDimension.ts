import {_ListOf__string} from './_ListOf__string';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _SetDimension: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        DimensionType: {
            shape: {
                type: 'string',
            },
        },
        Values: {
            shape: _ListOf__string,
        },
    },
};