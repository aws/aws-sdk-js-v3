import {List as _List_} from '@aws-sdk/types';
import {_SamplingRuleRecord} from './_SamplingRuleRecord';

export const _SamplingRuleRecordList: _List_ = {
    type: 'list',
    member: {
        shape: _SamplingRuleRecord,
    },
};