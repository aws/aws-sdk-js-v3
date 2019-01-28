import {_ApplicationsResponse} from './_ApplicationsResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetAppsOutput: _Structure_ = {
    type: 'structure',
    required: [
        'ApplicationsResponse',
    ],
    members: {
        ApplicationsResponse: {
            shape: _ApplicationsResponse,
        },
    },
    payload: 'ApplicationsResponse',
};