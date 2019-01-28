import {Structure as _Structure_} from '@aws-sdk/types';

export const GetSegmentInput: _Structure_ = {
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
        SegmentId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'segment-id',
        },
    },
};