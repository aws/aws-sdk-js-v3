import {Structure as _Structure_} from '@aws-sdk/types';

export const GetSegmentVersionInput: _Structure_ = {
    type: 'structure',
    required: [
        'SegmentId',
        'Version',
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
        Version: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'version',
        },
    },
};