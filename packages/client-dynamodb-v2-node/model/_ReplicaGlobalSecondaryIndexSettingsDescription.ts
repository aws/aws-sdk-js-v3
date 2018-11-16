import {_AutoScalingSettingsDescription} from './_AutoScalingSettingsDescription';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _ReplicaGlobalSecondaryIndexSettingsDescription: _Structure_ = {
    type: 'structure',
    required: [
        'IndexName',
    ],
    members: {
        IndexName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        IndexStatus: {
            shape: {
                type: 'string',
            },
        },
        ProvisionedReadCapacityUnits: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        ProvisionedReadCapacityAutoScalingSettings: {
            shape: _AutoScalingSettingsDescription,
        },
        ProvisionedWriteCapacityUnits: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        ProvisionedWriteCapacityAutoScalingSettings: {
            shape: _AutoScalingSettingsDescription,
        },
    },
};