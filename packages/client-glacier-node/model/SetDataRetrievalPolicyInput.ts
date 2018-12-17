import {_DataRetrievalPolicy} from './_DataRetrievalPolicy';
import {Structure as _Structure_} from '@aws-sdk/types';

export const SetDataRetrievalPolicyInput: _Structure_ = {
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
        Policy: {
            shape: _DataRetrievalPolicy,
        },
    },
};