import {Structure as _Structure_} from '@aws-sdk/types';

export const _AccessControlTranslation: _Structure_ = {
    type: 'structure',
    required: [
        'Owner',
    ],
    members: {
        Owner: {
            shape: {
                type: 'string',
            },
        },
    },
};