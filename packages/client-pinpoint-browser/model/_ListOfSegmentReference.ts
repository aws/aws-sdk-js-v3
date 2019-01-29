import {List as _List_} from '@aws-sdk/types';
import {_SegmentReference} from './_SegmentReference';

export const _ListOfSegmentReference: _List_ = {
    type: 'list',
    member: {
        shape: _SegmentReference,
    },
};