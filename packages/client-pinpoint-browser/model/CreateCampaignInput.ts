import {_WriteCampaignRequest} from './_WriteCampaignRequest';
import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateCampaignInput: _Structure_ = {
    type: 'structure',
    required: [
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
        WriteCampaignRequest: {
            shape: _WriteCampaignRequest,
        },
    },
    payload: 'WriteCampaignRequest',
};