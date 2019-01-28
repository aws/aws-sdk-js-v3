import {Structure as _Structure_} from '@aws-sdk/types';

export const _ExportJobRequest: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        RoleArn: {
            shape: {
                type: 'string',
            },
        },
        S3UrlPrefix: {
            shape: {
                type: 'string',
            },
        },
        SegmentId: {
            shape: {
                type: 'string',
            },
        },
        SegmentVersion: {
            shape: {
                type: 'integer',
            },
        },
    },
};