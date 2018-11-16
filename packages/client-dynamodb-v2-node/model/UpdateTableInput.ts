import {_AttributeDefinitions} from './_AttributeDefinitions';
import {_ProvisionedThroughput} from './_ProvisionedThroughput';
import {_GlobalSecondaryIndexUpdateList} from './_GlobalSecondaryIndexUpdateList';
import {_StreamSpecification} from './_StreamSpecification';
import {_SSESpecification} from './_SSESpecification';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateTableInput: _Structure_ = {
    type: 'structure',
    required: [
        'TableName',
    ],
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
        ProvisionedThroughput: {
            shape: _ProvisionedThroughput,
        },
        GlobalSecondaryIndexUpdates: {
            shape: _GlobalSecondaryIndexUpdateList,
        },
        StreamSpecification: {
            shape: _StreamSpecification,
        },
        SSESpecification: {
            shape: _SSESpecification,
        },
    },
};