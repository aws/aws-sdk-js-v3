import {_EndpointItemResponse} from './_EndpointItemResponse';
import {_MapOfEventItemResponse} from './_MapOfEventItemResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _ItemResponse: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        EndpointItemResponse: {
            shape: _EndpointItemResponse,
        },
        EventsItemResponse: {
            shape: _MapOfEventItemResponse,
        },
    },
};