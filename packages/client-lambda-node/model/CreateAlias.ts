import {CreateAliasInput} from './CreateAliasInput';
import {CreateAliasOutput} from './CreateAliasOutput';
import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {ResourceConflictException} from './ResourceConflictException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateAlias: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateAlias',
    http: {
        method: 'POST',
        requestUri: '/2015-03-31/functions/{FunctionName}/aliases',
    },
    input: {
        shape: CreateAliasInput,
    },
    output: {
        shape: CreateAliasOutput,
    },
    errors: [
        {
            shape: ServiceException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: ResourceConflictException,
        },
        {
            shape: InvalidParameterValueException,
        },
        {
            shape: TooManyRequestsException,
        },
    ],
};