import {DeleteEventSourceMappingInput} from './DeleteEventSourceMappingInput';
import {DeleteEventSourceMappingOutput} from './DeleteEventSourceMappingOutput';
import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {ResourceInUseException} from './ResourceInUseException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteEventSourceMapping: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteEventSourceMapping',
    http: {
        method: 'DELETE',
        requestUri: '/2015-03-31/event-source-mappings/{UUID}',
    },
    input: {
        shape: DeleteEventSourceMappingInput,
    },
    output: {
        shape: DeleteEventSourceMappingOutput,
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
            shape: ResourceInUseException,
        },
    ],
};