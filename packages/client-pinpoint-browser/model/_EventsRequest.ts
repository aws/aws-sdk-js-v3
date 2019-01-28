import {_MapOfEventsBatch} from './_MapOfEventsBatch';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _EventsRequest: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        BatchItem: {
            shape: _MapOfEventsBatch,
        },
    },
};