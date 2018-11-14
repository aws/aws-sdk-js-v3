import {_ContinuousBackupsDescription} from './_ContinuousBackupsDescription';
import {Structure as _Structure_} from '@aws-sdk/types';

export const DescribeContinuousBackupsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ContinuousBackupsDescription: {
            shape: _ContinuousBackupsDescription,
        },
    },
};