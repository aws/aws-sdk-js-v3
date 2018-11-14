import {_SamplingRule} from './_SamplingRule';
import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateSamplingRuleInput: _Structure_ = {
    type: 'structure',
    required: [
        'SamplingRule',
    ],
    members: {
        SamplingRule: {
            shape: _SamplingRule,
        },
    },
};