import {_GlobalTableDescription} from './_GlobalTableDescription';
import {Structure as _Structure_} from '@aws-sdk/types';

export const DescribeGlobalTableOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        GlobalTableDescription: {
            shape: _GlobalTableDescription,
        },
    },
};