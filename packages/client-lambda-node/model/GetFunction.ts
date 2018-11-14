import {GetFunctionInput} from './GetFunctionInput';
import {GetFunctionOutput} from './GetFunctionOutput';
import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetFunction: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetFunction',
    http: {
        method: 'GET',
        requestUri: '/2015-03-31/functions/{FunctionName}',
    },
    input: {
        shape: GetFunctionInput,
    },
    output: {
        shape: GetFunctionOutput,
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