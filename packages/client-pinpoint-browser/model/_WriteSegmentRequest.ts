import {_SegmentDimensions} from './_SegmentDimensions';
import {_SegmentGroupList} from './_SegmentGroupList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _WriteSegmentRequest: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Dimensions: {
            shape: _SegmentDimensions,
        },
        Name: {
            shape: {
                type: 'string',
            },
        },
        SegmentGroups: {
            shape: _SegmentGroupList,
        },
    },
};