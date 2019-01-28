import {_MapOfItemResponse} from './_MapOfItemResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _EventsResponse: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Results: {
            shape: _MapOfItemResponse,
        },
    },
};