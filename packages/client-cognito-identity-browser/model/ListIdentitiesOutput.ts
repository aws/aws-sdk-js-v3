import {_IdentitiesList} from './_IdentitiesList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListIdentitiesOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        IdentityPoolId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Identities: {
            shape: _IdentitiesList,
        },
        NextToken: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};