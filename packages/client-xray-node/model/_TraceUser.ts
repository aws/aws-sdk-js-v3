import {_ServiceIds} from './_ServiceIds';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _TraceUser: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        UserName: {
            shape: {
                type: 'string',
            },
        },
        ServiceIds: {
            shape: _ServiceIds,
        },
    },
};