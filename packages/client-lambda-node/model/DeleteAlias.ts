import {DeleteAliasInput} from './DeleteAliasInput';
import {DeleteAliasOutput} from './DeleteAliasOutput';
import {ServiceException} from './ServiceException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteAlias: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteAlias',
    http: {
        method: 'DELETE',
        requestUri: '/2015-03-31/functions/{FunctionName}/aliases/{Name}',
    },
    input: {
        shape: DeleteAliasInput,
    },
    output: {
        shape: DeleteAliasOutput,
    },
    errors: [
        {
            shape: ServiceException,
        },
        {
            shape: InvalidParameterValueException,
        },
        {
            shape: TooManyRequestsException,
        },
    ],
};