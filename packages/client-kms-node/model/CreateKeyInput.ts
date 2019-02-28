import {_TagList} from './_TagList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateKeyInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Policy: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Description: {
            shape: {
                type: 'string',
            },
        },
        KeyUsage: {
            shape: {
                type: 'string',
            },
        },
        Origin: {
            shape: {
                type: 'string',
            },
        },
        BypassPolicyLockoutSafetyCheck: {
            shape: {
                type: 'boolean',
            },
        },
        Tags: {
            shape: _TagList,
        },
    },
};