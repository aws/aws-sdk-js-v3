import {_Credentials} from './_Credentials';
import {Structure as _Structure_} from '@aws/types';

export const GetCredentialsForIdentityOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        IdentityId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Credentials: {
            shape: _Credentials,
        },
    },
};