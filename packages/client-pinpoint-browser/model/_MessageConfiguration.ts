import {_Message} from './_Message';
import {_CampaignEmailMessage} from './_CampaignEmailMessage';
import {_CampaignSmsMessage} from './_CampaignSmsMessage';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _MessageConfiguration: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ADMMessage: {
            shape: _Message,
        },
        APNSMessage: {
            shape: _Message,
        },
        BaiduMessage: {
            shape: _Message,
        },
        DefaultMessage: {
            shape: _Message,
        },
        EmailMessage: {
            shape: _CampaignEmailMessage,
        },
        GCMMessage: {
            shape: _Message,
        },
        SMSMessage: {
            shape: _CampaignSmsMessage,
        },
    },
};