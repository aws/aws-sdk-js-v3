import {_TimeToLiveSpecification} from './_TimeToLiveSpecification';
import {Structure as _Structure_} from '@aws/types';

export const UpdateTimeToLiveInput: _Structure_ = {
    type: 'structure',
    required: [
        'TableName',
        'TimeToLiveSpecification',
    ],
    members: {
        TableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        TimeToLiveSpecification: {
            shape: _TimeToLiveSpecification,
        },
    },
};