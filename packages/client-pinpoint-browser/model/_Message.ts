import {Structure as _Structure_} from '@aws-sdk/types';

export const _Message: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Action: {
            shape: {
                type: 'string',
            },
        },
        Body: {
            shape: {
                type: 'string',
            },
        },
        ImageIconUrl: {
            shape: {
                type: 'string',
            },
        },
        ImageSmallIconUrl: {
            shape: {
                type: 'string',
            },
        },
        ImageUrl: {
            shape: {
                type: 'string',
            },
        },
        JsonBody: {
            shape: {
                type: 'string',
            },
        },
        MediaUrl: {
            shape: {
                type: 'string',
            },
        },
        RawContent: {
            shape: {
                type: 'string',
            },
        },
        SilentPush: {
            shape: {
                type: 'boolean',
            },
        },
        TimeToLive: {
            shape: {
                type: 'integer',
            },
        },
        Title: {
            shape: {
                type: 'string',
            },
        },
        Url: {
            shape: {
                type: 'string',
            },
        },
    },
};