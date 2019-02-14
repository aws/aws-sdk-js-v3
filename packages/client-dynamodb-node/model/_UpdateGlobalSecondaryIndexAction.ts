import {_ProvisionedThroughput} from './_ProvisionedThroughput';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _UpdateGlobalSecondaryIndexAction: _Structure_ = {
    type: 'structure',
    required: [
        'IndexName',
        'ProvisionedThroughput',
    ],
    members: {
        IndexName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        ProvisionedThroughput: {
            shape: _ProvisionedThroughput,
        },
    },
};