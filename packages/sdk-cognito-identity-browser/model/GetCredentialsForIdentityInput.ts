import {_LoginsMap} from './_LoginsMap';
import {Structure as _Structure_} from '@aws/types';

export const GetCredentialsForIdentityInput: _Structure_ = {
    type: 'structure',
    required: [
        'IdentityId',
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
        CustomRoleArn: {
            shape: {
                type: 'string',
                min: 20,
            },
        },
    },
};