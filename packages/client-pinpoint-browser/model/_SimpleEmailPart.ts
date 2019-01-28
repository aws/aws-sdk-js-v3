import {Structure as _Structure_} from '@aws-sdk/types';

export const _SimpleEmailPart: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Charset: {
            shape: {
                type: 'string',
            },
        },
        Data: {
            shape: {
                type: 'string',
            },
        },
    },
};