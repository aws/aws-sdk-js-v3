import {_CampaignHook} from './_CampaignHook';
import {_CampaignLimits} from './_CampaignLimits';
import {_QuietTime} from './_QuietTime';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _ApplicationSettingsResource: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ApplicationId: {
            shape: {
                type: 'string',
            },
        },
        CampaignHook: {
            shape: _CampaignHook,
        },
        LastModifiedDate: {
            shape: {
                type: 'string',
            },
        },
        Limits: {
            shape: _CampaignLimits,
        },
        QuietTime: {
            shape: _QuietTime,
        },
    },
};