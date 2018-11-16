import {List as _List_} from '@aws-sdk/types';
import {_UnprocessedTraceSegment} from './_UnprocessedTraceSegment';

export const _UnprocessedTraceSegmentList: _List_ = {
    type: 'list',
    member: {
        shape: _UnprocessedTraceSegment,
    },
};