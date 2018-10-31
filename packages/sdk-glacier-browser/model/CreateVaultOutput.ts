import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateVaultOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        location: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Location',
        },
    },
};