import {DeleteFunctionConcurrencyInput} from './DeleteFunctionConcurrencyInput';
import {DeleteFunctionConcurrencyOutput} from './DeleteFunctionConcurrencyOutput';
import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteFunctionConcurrency: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteFunctionConcurrency',
    http: {
        method: 'DELETE',
        requestUri: '/2017-10-31/functions/{FunctionName}/concurrency',
    },
    input: {
        shape: DeleteFunctionConcurrencyInput,
    },
    output: {
        shape: DeleteFunctionConcurrencyOutput,
    },
    errors: [
        {
            shape: ServiceException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: TooManyRequestsException,
        },
        {
            shape: InvalidParameterValueException,
        },
    ],
};