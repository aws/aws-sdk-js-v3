import {_BaiduChannelRequest} from './_BaiduChannelRequest';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateBaiduChannelInput: _Structure_ = {
    type: 'structure',
    required: [
        'ApplicationId',
        'BaiduChannelRequest',
    ],
    members: {
        ApplicationId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'application-id',
        },
        BaiduChannelRequest: {
            shape: _BaiduChannelRequest,
        },
    },
    payload: 'BaiduChannelRequest',
};