import {Structure as _Structure_} from '@aws/types';

export const MergeDeveloperIdentitiesOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        IdentityId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};