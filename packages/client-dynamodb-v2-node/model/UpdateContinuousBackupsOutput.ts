import {_ContinuousBackupsDescription} from './_ContinuousBackupsDescription';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateContinuousBackupsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ContinuousBackupsDescription: {
            shape: _ContinuousBackupsDescription,
        },
    },
};