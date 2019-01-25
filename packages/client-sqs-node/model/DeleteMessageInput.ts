import {Structure as _Structure_} from '@aws-sdk/types';

export const DeleteMessageInput: _Structure_ = {
    type: 'structure',
    required: [
        'QueueUrl',
        'ReceiptHandle',
    ],
    members: {
        QueueUrl: {
            shape: {
                type: 'string',
            },
        },
        ReceiptHandle: {
            shape: {
                type: 'string',
            },
        },
    },
};