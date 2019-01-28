import {_MapOfMapOfEndpointMessageResult} from './_MapOfMapOfEndpointMessageResult';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _SendUsersMessageResponse: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ApplicationId: {
            shape: {
                type: 'string',
            },
        },
        RequestId: {
            shape: {
                type: 'string',
            },
        },
        Result: {
            shape: _MapOfMapOfEndpointMessageResult,
        },
    },
};