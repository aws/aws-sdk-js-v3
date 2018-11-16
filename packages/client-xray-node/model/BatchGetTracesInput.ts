import {_TraceIdList} from './_TraceIdList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const BatchGetTracesInput: _Structure_ = {
    type: 'structure',
    required: [
        'TraceIds',
    ],
    members: {
        TraceIds: {
            shape: _TraceIdList,
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};