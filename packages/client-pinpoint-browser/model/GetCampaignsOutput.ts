import {_CampaignsResponse} from './_CampaignsResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetCampaignsOutput: _Structure_ = {
    type: 'structure',
    required: [
        'CampaignsResponse',
    ],
    members: {
        CampaignsResponse: {
            shape: _CampaignsResponse,
        },
    },
    payload: 'CampaignsResponse',
};