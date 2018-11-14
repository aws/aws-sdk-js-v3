import {Structure as _Structure_} from '@aws-sdk/types';

export const _BackendConnectionErrors: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        TimeoutCount: {
            shape: {
                type: 'integer',
            },
        },
        ConnectionRefusedCount: {
            shape: {
                type: 'integer',
            },
        },
        HTTPCode4XXCount: {
            shape: {
                type: 'integer',
            },
        },
        HTTPCode5XXCount: {
            shape: {
                type: 'integer',
            },
        },
        UnknownHostCount: {
            shape: {
                type: 'integer',
            },
        },
        OtherCount: {
            shape: {
                type: 'integer',
            },
        },
    },
};