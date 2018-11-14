import {_AutoScalingSettingsUpdate} from './_AutoScalingSettingsUpdate';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _GlobalTableGlobalSecondaryIndexSettingsUpdate: _Structure_ = {
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
        ProvisionedWriteCapacityUnits: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        ProvisionedWriteCapacityAutoScalingSettingsUpdate: {
            shape: _AutoScalingSettingsUpdate,
        },
    },
};