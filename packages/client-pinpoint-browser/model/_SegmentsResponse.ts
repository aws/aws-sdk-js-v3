import {_ListOfSegmentResponse} from './_ListOfSegmentResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _SegmentsResponse: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Item: {
            shape: _ListOfSegmentResponse,
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};