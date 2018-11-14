import {GetPolicyInput} from './GetPolicyInput';
import {GetPolicyOutput} from './GetPolicyOutput';
import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetPolicy: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetPolicy',
    http: {
        method: 'GET',
        requestUri: '/2015-03-31/functions/{FunctionName}/policy',
    },
    input: {
        shape: GetPolicyInput,
    },
    output: {
        shape: GetPolicyOutput,
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