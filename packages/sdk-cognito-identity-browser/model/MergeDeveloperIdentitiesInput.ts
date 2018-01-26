import {Structure as _Structure_} from '@aws/types';

export const MergeDeveloperIdentitiesInput: _Structure_ = {
    type: 'structure',
    required: [
        'SourceUserIdentifier',
        'DestinationUserIdentifier',
        'DeveloperProviderName',
        'IdentityPoolId',
    ],
    members: {
        SourceUserIdentifier: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        DestinationUserIdentifier: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        DeveloperProviderName: {
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
    },
};