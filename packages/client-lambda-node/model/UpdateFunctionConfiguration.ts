import {UpdateFunctionConfigurationInput} from './UpdateFunctionConfigurationInput';
import {UpdateFunctionConfigurationOutput} from './UpdateFunctionConfigurationOutput';
import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {ResourceConflictException} from './ResourceConflictException';
import {PreconditionFailedException} from './PreconditionFailedException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateFunctionConfiguration: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateFunctionConfiguration',
    http: {
        method: 'PUT',
        requestUri: '/2015-03-31/functions/{FunctionName}/configuration',
    },
    input: {
        shape: UpdateFunctionConfigurationInput,
    },
    output: {
        shape: UpdateFunctionConfigurationOutput,
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
            shape: PreconditionFailedException,
        },
    ],
};