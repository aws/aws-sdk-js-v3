import {_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate} from './_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _AutoScalingPolicyUpdate: _Structure_ = {
    type: 'structure',
    required: [
        'TargetTrackingScalingPolicyConfiguration',
    ],
    members: {
        PolicyName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        TargetTrackingScalingPolicyConfiguration: {
            shape: _AutoScalingTargetTrackingScalingPolicyConfigurationUpdate,
        },
    },
};