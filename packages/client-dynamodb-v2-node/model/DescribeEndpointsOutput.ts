import {_Endpoints} from './_Endpoints';
import {Structure as _Structure_} from '@aws-sdk/types';

export const DescribeEndpointsOutput: _Structure_ = {
    type: 'structure',
    required: [
        'Endpoints',
    ],
    members: {
        Endpoints: {
            shape: _Endpoints,
        },
    },
};