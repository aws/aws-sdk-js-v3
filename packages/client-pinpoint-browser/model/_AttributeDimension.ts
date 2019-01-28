import {_ListOf__string} from './_ListOf__string';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _AttributeDimension: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        AttributeType: {
            shape: {
                type: 'string',
            },
        },
        Values: {
            shape: _ListOf__string,
        },
    },
};