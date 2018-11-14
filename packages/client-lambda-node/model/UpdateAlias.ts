import {UpdateAliasInput} from './UpdateAliasInput';
import {UpdateAliasOutput} from './UpdateAliasOutput';
import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {PreconditionFailedException} from './PreconditionFailedException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateAlias: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateAlias',
    http: {
        method: 'PUT',
        requestUri: '/2015-03-31/functions/{FunctionName}/aliases/{Name}',
    },
    input: {
        shape: UpdateAliasInput,
    },
    output: {
        shape: UpdateAliasOutput,
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
            shape: PreconditionFailedException,
        },
    ],
};