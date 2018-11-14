import {PutFunctionConcurrencyInput} from './PutFunctionConcurrencyInput';
import {PutFunctionConcurrencyOutput} from './PutFunctionConcurrencyOutput';
import {ServiceException} from './ServiceException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutFunctionConcurrency: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutFunctionConcurrency',
    http: {
        method: 'PUT',
        requestUri: '/2017-10-31/functions/{FunctionName}/concurrency',
    },
    input: {
        shape: PutFunctionConcurrencyInput,
    },
    output: {
        shape: PutFunctionConcurrencyOutput,
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
            shape: TooManyRequestsException,
        },
    ],
};