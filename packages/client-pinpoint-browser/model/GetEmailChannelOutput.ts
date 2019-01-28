import {_EmailChannelResponse} from './_EmailChannelResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetEmailChannelOutput: _Structure_ = {
    type: 'structure',
    required: [
        'EmailChannelResponse',
    ],
    members: {
        EmailChannelResponse: {
            shape: _EmailChannelResponse,
        },
    },
    payload: 'EmailChannelResponse',
};