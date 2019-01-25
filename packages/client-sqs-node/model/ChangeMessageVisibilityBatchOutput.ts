import {_ChangeMessageVisibilityBatchResultEntryList} from './_ChangeMessageVisibilityBatchResultEntryList';
import {_BatchResultErrorEntryList} from './_BatchResultErrorEntryList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ChangeMessageVisibilityBatchOutput: _Structure_ = {
    type: 'structure',
    required: [
        'Successful',
        'Failed',
    ],
    members: {
        Successful: {
            shape: _ChangeMessageVisibilityBatchResultEntryList,
        },
        Failed: {
            shape: _BatchResultErrorEntryList,
        },
    },
};