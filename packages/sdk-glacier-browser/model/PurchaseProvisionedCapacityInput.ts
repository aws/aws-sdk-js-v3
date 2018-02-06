import {Structure as _Structure_} from '@aws/types';

export const PurchaseProvisionedCapacityInput: _Structure_ = {
    type: 'structure',
    required: [
        'accountId',
    ],
    members: {
        accountId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'accountId',
        },
    },
};