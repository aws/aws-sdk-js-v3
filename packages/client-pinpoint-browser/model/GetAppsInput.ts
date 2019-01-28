import {Structure as _Structure_} from '@aws-sdk/types';

export const GetAppsInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        PageSize: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'page-size',
        },
        Token: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'token',
        },
    },
};