import {_TimeToLiveDescription} from './_TimeToLiveDescription';
import {Structure as _Structure_} from '@aws-sdk/types';

export const DescribeTimeToLiveOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        TimeToLiveDescription: {
            shape: _TimeToLiveDescription,
        },
    },
};