import {_TagMap} from './_TagMap';
import {Structure as _Structure_} from '@aws/types';

export const AddTagsToVaultInput: _Structure_ = {
    type: 'structure',
    required: [
        'accountId',
        'vaultName',
    ],
    members: {
        accountId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'accountId',
        },
        vaultName: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'vaultName',
        },
        Tags: {
            shape: _TagMap,
        },
    },
};