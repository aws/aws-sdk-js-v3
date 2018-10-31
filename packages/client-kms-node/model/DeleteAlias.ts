import {DeleteAliasInput} from './DeleteAliasInput';
import {DeleteAliasOutput} from './DeleteAliasOutput';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {NotFoundException} from './NotFoundException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteAlias: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteAlias',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteAliasInput,
    },
    output: {
        shape: DeleteAliasOutput,
    },
    errors: [
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: NotFoundException,
        },
        {
            shape: KMSInternalException,
        },
        {
            shape: KMSInvalidStateException,
        },
    ],
};