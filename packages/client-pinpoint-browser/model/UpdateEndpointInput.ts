import {_EndpointRequest} from './_EndpointRequest';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateEndpointInput: _Structure_ = {
    type: 'structure',
    required: [
        'ApplicationId',
        'EndpointId',
        'EndpointRequest',
    ],
    members: {
        ApplicationId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'application-id',
        },
        EndpointId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'endpoint-id',
        },
        EndpointRequest: {
            shape: _EndpointRequest,
        },
    },
    payload: 'EndpointRequest',
};