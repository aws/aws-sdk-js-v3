import {_SendMessageBatchRequestEntryList} from './_SendMessageBatchRequestEntryList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const SendMessageBatchInput: _Structure_ = {
    type: 'structure',
    required: [
        'QueueUrl',
        'Entries',
    ],
    members: {
        QueueUrl: {
            shape: {
                type: 'string',
            },
        },
        Entries: {
            shape: _SendMessageBatchRequestEntryList,
        },
    },
};