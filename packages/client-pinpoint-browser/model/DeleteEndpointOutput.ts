import {_EndpointResponse} from './_EndpointResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const DeleteEndpointOutput: _Structure_ = {
    type: 'structure',
    required: [
        'EndpointResponse',
    ],
    members: {
        EndpointResponse: {
            shape: _EndpointResponse,
        },
    },
    payload: 'EndpointResponse',
};