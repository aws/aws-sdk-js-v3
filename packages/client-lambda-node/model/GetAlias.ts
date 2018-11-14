import {GetAliasInput} from './GetAliasInput';
import {GetAliasOutput} from './GetAliasOutput';
import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetAlias: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetAlias',
    http: {
        method: 'GET',
        requestUri: '/2015-03-31/functions/{FunctionName}/aliases/{Name}',
    },
    input: {
        shape: GetAliasInput,
    },
    output: {
        shape: GetAliasOutput,
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