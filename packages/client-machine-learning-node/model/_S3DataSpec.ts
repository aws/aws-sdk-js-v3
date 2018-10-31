import {Structure as _Structure_} from '@aws-sdk/types';

export const _S3DataSpec: _Structure_ = {
    type: 'structure',
    required: [
        'DataLocationS3',
    ],
    members: {
        DataLocationS3: {
            shape: {
                type: 'string',
            },
        },
        DataRearrangement: {
            shape: {
                type: 'string',
            },
        },
        DataSchema: {
            shape: {
                type: 'string',
            },
        },
        DataSchemaLocationS3: {
            shape: {
                type: 'string',
            },
        },
    },
};