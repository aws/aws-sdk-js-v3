import {CreateRealtimeEndpointInput} from './CreateRealtimeEndpointInput';
import {CreateRealtimeEndpointOutput} from './CreateRealtimeEndpointOutput';
import {InvalidInputException} from './InvalidInputException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerException} from './InternalServerException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateRealtimeEndpoint: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateRealtimeEndpoint',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CreateRealtimeEndpointInput,
    },
    output: {
        shape: CreateRealtimeEndpointOutput,
    },
    errors: [
        {
            shape: InvalidInputException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InternalServerException,
        },
    ],
};