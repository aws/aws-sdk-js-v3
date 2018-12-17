import {_InventoryRetrievalJobDescription} from './_InventoryRetrievalJobDescription';
import {_SelectParameters} from './_SelectParameters';
import {_OutputLocation} from './_OutputLocation';
import {Structure as _Structure_} from '@aws-sdk/types';

export const DescribeJobOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        JobId: {
            shape: {
                type: 'string',
            },
        },
        JobDescription: {
            shape: {
                type: 'string',
            },
        },
        Action: {
            shape: {
                type: 'string',
            },
        },
        ArchiveId: {
            shape: {
                type: 'string',
            },
        },
        VaultARN: {
            shape: {
                type: 'string',
            },
        },
        CreationDate: {
            shape: {
                type: 'string',
            },
        },
        Completed: {
            shape: {
                type: 'boolean',
            },
        },
        StatusCode: {
            shape: {
                type: 'string',
            },
        },
        StatusMessage: {
            shape: {
                type: 'string',
            },
        },
        ArchiveSizeInBytes: {
            shape: {
                type: 'integer',
            },
        },
        InventorySizeInBytes: {
            shape: {
                type: 'integer',
            },
        },
        SNSTopic: {
            shape: {
                type: 'string',
            },
        },
        CompletionDate: {
            shape: {
                type: 'string',
            },
        },
        SHA256TreeHash: {
            shape: {
                type: 'string',
            },
        },
        ArchiveSHA256TreeHash: {
            shape: {
                type: 'string',
            },
        },
        RetrievalByteRange: {
            shape: {
                type: 'string',
            },
        },
        Tier: {
            shape: {
                type: 'string',
            },
        },
        InventoryRetrievalParameters: {
            shape: _InventoryRetrievalJobDescription,
        },
        JobOutputPath: {
            shape: {
                type: 'string',
            },
        },
        SelectParameters: {
            shape: _SelectParameters,
        },
        OutputLocation: {
            shape: _OutputLocation,
        },
    },
};