import {Structure as _Structure_} from '@aws-sdk/types';

export const GetSegmentImportJobsInput: _Structure_ = {
    type: 'structure',
    required: [
        'SegmentId',
        'ApplicationId',
    ],
    members: {
        ApplicationId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'application-id',
        },
        PageSize: {
            shape: {
                type: 'string',
            },
            location: 'querystring',
            locationName: 'page-size',
        },
        SegmentId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'segment-id',
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