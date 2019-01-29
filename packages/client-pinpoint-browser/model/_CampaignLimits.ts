import {Structure as _Structure_} from '@aws-sdk/types';

export const _CampaignLimits: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Daily: {
            shape: {
                type: 'integer',
            },
        },
        MaximumDuration: {
            shape: {
                type: 'integer',
            },
        },
        MessagesPerSecond: {
            shape: {
                type: 'integer',
            },
        },
        Total: {
            shape: {
                type: 'integer',
            },
        },
    },
};