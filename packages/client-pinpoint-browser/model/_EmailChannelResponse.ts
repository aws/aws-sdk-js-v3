import {Structure as _Structure_} from '@aws-sdk/types';

export const _EmailChannelResponse: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ApplicationId: {
            shape: {
                type: 'string',
            },
        },
        ConfigurationSet: {
            shape: {
                type: 'string',
            },
        },
        CreationDate: {
            shape: {
                type: 'string',
            },
        },
        Enabled: {
            shape: {
                type: 'boolean',
            },
        },
        FromAddress: {
            shape: {
                type: 'string',
            },
        },
        HasCredential: {
            shape: {
                type: 'boolean',
            },
        },
        Id: {
            shape: {
                type: 'string',
            },
        },
        Identity: {
            shape: {
                type: 'string',
            },
        },
        IsArchived: {
            shape: {
                type: 'boolean',
            },
        },
        LastModifiedBy: {
            shape: {
                type: 'string',
            },
        },
        LastModifiedDate: {
            shape: {
                type: 'string',
            },
        },
        MessagesPerSecond: {
            shape: {
                type: 'integer',
            },
        },
        Platform: {
            shape: {
                type: 'string',
            },
        },
        RoleArn: {
            shape: {
                type: 'string',
            },
        },
        Version: {
            shape: {
                type: 'integer',
            },
        },
    },
};