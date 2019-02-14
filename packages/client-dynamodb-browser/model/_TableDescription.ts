import {_AttributeDefinitions} from './_AttributeDefinitions';
import {_KeySchema} from './_KeySchema';
import {_ProvisionedThroughputDescription} from './_ProvisionedThroughputDescription';
import {_LocalSecondaryIndexDescriptionList} from './_LocalSecondaryIndexDescriptionList';
import {_GlobalSecondaryIndexDescriptionList} from './_GlobalSecondaryIndexDescriptionList';
import {_StreamSpecification} from './_StreamSpecification';
import {_RestoreSummary} from './_RestoreSummary';
import {_SSEDescription} from './_SSEDescription';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _TableDescription: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        AttributeDefinitions: {
            shape: _AttributeDefinitions,
        },
        TableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        KeySchema: {
            shape: _KeySchema,
        },
        TableStatus: {
            shape: {
                type: 'string',
            },
        },
        CreationDateTime: {
            shape: {
                type: 'timestamp',
            },
        },
        ProvisionedThroughput: {
            shape: _ProvisionedThroughputDescription,
        },
        TableSizeBytes: {
            shape: {
                type: 'integer',
            },
        },
        ItemCount: {
            shape: {
                type: 'integer',
            },
        },
        TableArn: {
            shape: {
                type: 'string',
            },
        },
        TableId: {
            shape: {
                type: 'string',
            },
        },
        LocalSecondaryIndexes: {
            shape: _LocalSecondaryIndexDescriptionList,
        },
        GlobalSecondaryIndexes: {
            shape: _GlobalSecondaryIndexDescriptionList,
        },
        StreamSpecification: {
            shape: _StreamSpecification,
        },
        LatestStreamLabel: {
            shape: {
                type: 'string',
            },
        },
        LatestStreamArn: {
            shape: {
                type: 'string',
                min: 37,
            },
        },
        RestoreSummary: {
            shape: _RestoreSummary,
        },
        SSEDescription: {
            shape: _SSEDescription,
        },
    },
};