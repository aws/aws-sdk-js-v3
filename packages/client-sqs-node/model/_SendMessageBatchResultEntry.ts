import {Structure as _Structure_} from '@aws-sdk/types';

export const _SendMessageBatchResultEntry: _Structure_ = {
    type: 'structure',
    required: [
        'Id',
        'MessageId',
        'MD5OfMessageBody',
    ],
    members: {
        Id: {
            shape: {
                type: 'string',
            },
        },
        MessageId: {
            shape: {
                type: 'string',
            },
        },
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
        SequenceNumber: {
            shape: {
                type: 'string',
            },
        },
    },
};