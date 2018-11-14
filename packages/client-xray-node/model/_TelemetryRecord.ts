import {_BackendConnectionErrors} from './_BackendConnectionErrors';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _TelemetryRecord: _Structure_ = {
    type: 'structure',
    required: [
        'Timestamp',
    ],
    members: {
        Timestamp: {
            shape: {
                type: 'timestamp',
            },
        },
        SegmentsReceivedCount: {
            shape: {
                type: 'integer',
            },
        },
        SegmentsSentCount: {
            shape: {
                type: 'integer',
            },
        },
        SegmentsSpilloverCount: {
            shape: {
                type: 'integer',
            },
        },
        SegmentsRejectedCount: {
            shape: {
                type: 'integer',
            },
        },
        BackendConnectionErrors: {
            shape: _BackendConnectionErrors,
        },
    },
};