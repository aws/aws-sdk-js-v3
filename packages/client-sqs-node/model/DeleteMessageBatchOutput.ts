import {_DeleteMessageBatchResultEntryList} from './_DeleteMessageBatchResultEntryList';
import {_BatchResultErrorEntryList} from './_BatchResultErrorEntryList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const DeleteMessageBatchOutput: _Structure_ = {
    type: 'structure',
    required: [
        'Successful',
        'Failed',
    ],
    members: {
        Successful: {
            shape: _DeleteMessageBatchResultEntryList,
        },
        Failed: {
            shape: _BatchResultErrorEntryList,
        },
    },
};