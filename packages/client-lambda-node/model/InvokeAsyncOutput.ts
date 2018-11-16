import {Structure as _Structure_} from '@aws-sdk/types';

export const InvokeAsyncOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Status: {
            shape: {
                type: 'integer',
            },
            location: 'statusCode',
        },
    },
};