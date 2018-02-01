import {_LoginsMap} from './_LoginsMap';
import {Structure as _Structure_} from '@aws/types';

export const GetIdInput: _Structure_ = {
    type: 'structure',
    required: [
        'IdentityPoolId',
    ],
    members: {
        AccountId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        IdentityPoolId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Logins: {
            shape: _LoginsMap,
        },
    },
};