import {_SamplingRuleRecordList} from './_SamplingRuleRecordList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetSamplingRulesOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        SamplingRuleRecords: {
            shape: _SamplingRuleRecordList,
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};