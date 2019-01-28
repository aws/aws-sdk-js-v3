import {_WriteCampaignRequest} from './_WriteCampaignRequest';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateCampaignInput: _Structure_ = {
    type: 'structure',
    required: [
        'CampaignId',
        'ApplicationId',
        'WriteCampaignRequest',
    ],
    members: {
        ApplicationId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'application-id',
        },
        CampaignId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'campaign-id',
        },
        WriteCampaignRequest: {
            shape: _WriteCampaignRequest,
        },
    },
    payload: 'WriteCampaignRequest',
};