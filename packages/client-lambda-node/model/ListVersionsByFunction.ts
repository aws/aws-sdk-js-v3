import {ListVersionsByFunctionInput} from './ListVersionsByFunctionInput';
import {ListVersionsByFunctionOutput} from './ListVersionsByFunctionOutput';
import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListVersionsByFunction: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListVersionsByFunction',
    http: {
        method: 'GET',
        requestUri: '/2015-03-31/functions/{FunctionName}/versions',
    },
    input: {
        shape: ListVersionsByFunctionInput,
    },
    output: {
        shape: ListVersionsByFunctionOutput,
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