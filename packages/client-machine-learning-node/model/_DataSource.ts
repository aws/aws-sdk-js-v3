import {_RedshiftMetadata} from './_RedshiftMetadata';
import {_RDSMetadata} from './_RDSMetadata';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _DataSource: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        DataSourceId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
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
        CreatedByIamUser: {
            shape: {
                type: 'string',
            },
        },
        CreatedAt: {
            shape: {
                type: 'timestamp',
            },
        },
        LastUpdatedAt: {
            shape: {
                type: 'timestamp',
            },
        },
        DataSizeInBytes: {
            shape: {
                type: 'integer',
            },
        },
        NumberOfFiles: {
            shape: {
                type: 'integer',
            },
        },
        Name: {
            shape: {
                type: 'string',
            },
        },
        Status: {
            shape: {
                type: 'string',
            },
        },
        Message: {
            shape: {
                type: 'string',
            },
        },
        RedshiftMetadata: {
            shape: _RedshiftMetadata,
        },
        RDSMetadata: {
            shape: _RDSMetadata,
        },
        RoleARN: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        ComputeStatistics: {
            shape: {
                type: 'boolean',
            },
        },
        ComputeTime: {
            shape: {
                type: 'integer',
            },
        },
        FinishedAt: {
            shape: {
                type: 'timestamp',
            },
        },
        StartedAt: {
            shape: {
                type: 'timestamp',
            },
        },
    },
};