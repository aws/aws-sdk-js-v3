import {UpdateAliasInput} from './UpdateAliasInput';
import {UpdateAliasOutput} from './UpdateAliasOutput';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {NotFoundException} from './NotFoundException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateAlias: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateAlias',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateAliasInput,
    },
    output: {
        shape: UpdateAliasOutput,
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