import {Structure as _Structure_} from '@aws-sdk/types';

export const _AnnotationValue: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        NumberValue: {
            shape: {
                type: 'float',
            },
        },
        BooleanValue: {
            shape: {
                type: 'boolean',
            },
        },
        StringValue: {
            shape: {
                type: 'string',
            },
        },
    },
};