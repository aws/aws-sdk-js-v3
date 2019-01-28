import {List as _List_} from '@aws-sdk/types';
import {_CampaignResponse} from './_CampaignResponse';

export const _ListOfCampaignResponse: _List_ = {
    type: 'list',
    member: {
        shape: _CampaignResponse,
    },
};