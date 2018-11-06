import {Structure as _Structure_} from '@aws-sdk/types';

export const _Comment: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        commentId: {
            shape: {
                type: 'string',
            },
        },
        content: {
            shape: {
                type: 'string',
            },
        },
        inReplyTo: {
            shape: {
                type: 'string',
            },
        },
        creationDate: {
            shape: {
                type: 'timestamp',
            },
        },
        lastModifiedDate: {
            shape: {
                type: 'timestamp',
            },
        },
        authorArn: {
            shape: {
                type: 'string',
            },
        },
        deleted: {
            shape: {
                type: 'boolean',
            },
        },
        clientRequestToken: {
            shape: {
                type: 'string',
            },
        },
    },
};