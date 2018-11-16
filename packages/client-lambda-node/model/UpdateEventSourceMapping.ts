import {UpdateEventSourceMappingInput} from './UpdateEventSourceMappingInput';
import {UpdateEventSourceMappingOutput} from './UpdateEventSourceMappingOutput';
import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {ResourceConflictException} from './ResourceConflictException';
import {ResourceInUseException} from './ResourceInUseException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateEventSourceMapping: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateEventSourceMapping',
    http: {
        method: 'PUT',
        requestUri: '/2015-03-31/event-source-mappings/{UUID}',
    },
    input: {
        shape: UpdateEventSourceMappingInput,
    },
    output: {
        shape: UpdateEventSourceMappingOutput,
    },
    errors: [
        {
            shape: ServiceException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InvalidParameterValueException,
        },
        {
            shape: TooManyRequestsException,
        },
        {
            shape: ResourceConflictException,
        },
        {
            shape: ResourceInUseException,
        },
    ],
};