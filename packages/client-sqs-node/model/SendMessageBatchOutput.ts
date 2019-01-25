import {_SendMessageBatchResultEntryList} from './_SendMessageBatchResultEntryList';
import {_BatchResultErrorEntryList} from './_BatchResultErrorEntryList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const SendMessageBatchOutput: _Structure_ = {
    type: 'structure',
    required: [
        'Successful',
        'Failed',
    ],
    members: {
        Successful: {
            shape: _SendMessageBatchResultEntryList,
        },
        Failed: {
            shape: _BatchResultErrorEntryList,
        },
    },
};