import {_WriteSegmentRequest} from './_WriteSegmentRequest';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateSegmentInput: _Structure_ = {
    type: 'structure',
    required: [
        'SegmentId',
        'ApplicationId',
        'WriteSegmentRequest',
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
        WriteSegmentRequest: {
            shape: _WriteSegmentRequest,
        },
    },
    payload: 'WriteSegmentRequest',
};