import {_LoginsMap} from './_LoginsMap';
import {Structure as _Structure_} from '@aws/types';

export const GetOpenIdTokenForDeveloperIdentityInput: _Structure_ = {
    type: 'structure',
    required: [
        'IdentityPoolId',
        'Logins',
    ],
    members: {
        IdentityPoolId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        IdentityId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Logins: {
            shape: _LoginsMap,
        },
        TokenDuration: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
    },
};