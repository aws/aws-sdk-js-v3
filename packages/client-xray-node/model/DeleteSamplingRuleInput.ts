import {Structure as _Structure_} from '@aws-sdk/types';

export const DeleteSamplingRuleInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        RuleName: {
            shape: {
                type: 'string',
            },
        },
        RuleARN: {
            shape: {
                type: 'string',
            },
        },
    },
};