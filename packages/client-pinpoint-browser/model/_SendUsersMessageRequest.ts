import {_MapOf__string} from './_MapOf__string';
import {_DirectMessageConfiguration} from './_DirectMessageConfiguration';
import {_MapOfEndpointSendConfiguration} from './_MapOfEndpointSendConfiguration';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _SendUsersMessageRequest: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Context: {
            shape: _MapOf__string,
        },
        MessageConfiguration: {
            shape: _DirectMessageConfiguration,
        },
        TraceId: {
            shape: {
                type: 'string',
            },
        },
        Users: {
            shape: _MapOfEndpointSendConfiguration,
        },
    },
};