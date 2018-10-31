import {Structure as _Structure_} from '@aws-sdk/types';

export const DescribeVaultOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        VaultARN: {
            shape: {
                type: 'string',
            },
        },
        VaultName: {
            shape: {
                type: 'string',
            },
        },
        CreationDate: {
            shape: {
                type: 'string',
            },
        },
        LastInventoryDate: {
            shape: {
                type: 'string',
            },
        },
        NumberOfArchives: {
            shape: {
                type: 'integer',
            },
        },
        SizeInBytes: {
            shape: {
                type: 'integer',
            },
        },
    },
};