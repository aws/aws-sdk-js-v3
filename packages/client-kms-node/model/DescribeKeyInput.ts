import {_GrantTokenList} from './_GrantTokenList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const DescribeKeyInput: _Structure_ = {
    type: 'structure',
    required: [
        'KeyId',
    ],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        GrantTokens: {
            shape: _GrantTokenList,
        },
    },
};