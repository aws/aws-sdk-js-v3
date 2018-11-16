import {List as _List_} from '@aws-sdk/types';
import {_HistogramEntry} from './_HistogramEntry';

export const _Histogram: _List_ = {
    type: 'list',
    member: {
        shape: _HistogramEntry,
    },
};