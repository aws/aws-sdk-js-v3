import {ListEventSourceMappingsInput} from './ListEventSourceMappingsInput';
import {ListEventSourceMappingsOutput} from './ListEventSourceMappingsOutput';
import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListEventSourceMappings: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListEventSourceMappings',
    http: {
        method: 'GET',
        requestUri: '/2015-03-31/event-source-mappings/',
    },
    input: {
        shape: ListEventSourceMappingsInput,
    },
    output: {
        shape: ListEventSourceMappingsOutput,
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
    ],
};