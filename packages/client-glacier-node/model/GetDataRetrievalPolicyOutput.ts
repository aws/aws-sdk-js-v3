import {_DataRetrievalPolicy} from './_DataRetrievalPolicy';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetDataRetrievalPolicyOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Policy: {
            shape: _DataRetrievalPolicy,
        },
    },
};