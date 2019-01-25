import {Structure as _Structure_} from '@aws-sdk/types';

export const SendMessageOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        MD5OfMessageBody: {
            shape: {
                type: 'string',
            },
        },
        MD5OfMessageAttributes: {
            shape: {
                type: 'string',
            },
        },
        MessageId: {
            shape: {
                type: 'string',
            },
        },
        SequenceNumber: {
            shape: {
                type: 'string',
            },
        },
    },
};