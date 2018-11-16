import {_AdditionalVersionWeights} from './_AdditionalVersionWeights';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _AliasRoutingConfiguration: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        AdditionalVersionWeights: {
            shape: _AdditionalVersionWeights,
        },
    },
};