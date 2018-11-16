import {List as _List_} from '@aws-sdk/types';
import {_UnprocessedStatistics} from './_UnprocessedStatistics';

export const _UnprocessedStatisticsList: _List_ = {
    type: 'list',
    member: {
        shape: _UnprocessedStatistics,
    },
};