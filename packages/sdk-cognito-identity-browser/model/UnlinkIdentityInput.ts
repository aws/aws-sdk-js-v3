import {_LoginsMap} from './_LoginsMap';
import {_LoginsList} from './_LoginsList';
import {Structure as _Structure_} from '@aws/types';

export const UnlinkIdentityInput: _Structure_ = {
    type: 'structure',
    required: [
        'IdentityId',
        'Logins',
        'LoginsToRemove',
    ],
    members: {
        IdentityId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Logins: {
            shape: _LoginsMap,
        },
        LoginsToRemove: {
            shape: _LoginsList,
        },
    },
};