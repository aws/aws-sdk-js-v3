import {Structure as _Structure_} from '@aws-sdk/types';

export const GetQueueUrlInput: _Structure_ = {
    type: 'structure',
    required: [
        'QueueName',
    ],
    members: {
        QueueName: {
            shape: {
                type: 'string',
            },
        },
        QueueOwnerAWSAccountId: {
            shape: {
                type: 'string',
            },
        },
    },
};