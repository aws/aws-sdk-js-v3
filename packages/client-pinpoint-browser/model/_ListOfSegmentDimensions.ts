import {List as _List_} from '@aws-sdk/types';
import {_SegmentDimensions} from './_SegmentDimensions';

export const _ListOfSegmentDimensions: _List_ = {
    type: 'list',
    member: {
        shape: _SegmentDimensions,
    },
};