import {CreateFunctionInput} from './CreateFunctionInput';
import {CreateFunctionOutput} from './CreateFunctionOutput';
import {ServiceException} from './ServiceException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {ResourceConflictException} from './ResourceConflictException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {CodeStorageExceededException} from './CodeStorageExceededException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateFunction: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateFunction',
    http: {
        method: 'POST',
        requestUri: '/2015-03-31/functions',
    },
    input: {
        shape: CreateFunctionInput,
    },
    output: {
        shape: CreateFunctionOutput,
    },
    errors: [
        {
            shape: ServiceException,
        },
        {
            shape: InvalidParameterValueException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: ResourceConflictException,
        },
        {
            shape: TooManyRequestsException,
        },
        {
            shape: CodeStorageExceededException,
        },
    ],
};