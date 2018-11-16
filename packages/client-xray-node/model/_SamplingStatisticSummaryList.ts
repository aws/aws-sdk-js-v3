import {List as _List_} from '@aws-sdk/types';
import {_SamplingStatisticSummary} from './_SamplingStatisticSummary';

export const _SamplingStatisticSummaryList: _List_ = {
    type: 'list',
    member: {
        shape: _SamplingStatisticSummary,
    },
};