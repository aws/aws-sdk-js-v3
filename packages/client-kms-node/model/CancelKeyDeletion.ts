import {CancelKeyDeletionInput} from './CancelKeyDeletionInput';
import {CancelKeyDeletionOutput} from './CancelKeyDeletionOutput';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CancelKeyDeletion: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CancelKeyDeletion',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CancelKeyDeletionInput,
    },
    output: {
        shape: CancelKeyDeletionOutput,
    },
    errors: [
        {
            shape: NotFoundException,
        },
        {
            shape: InvalidArnException,
        },
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: KMSInternalException,
        },
        {
            shape: KMSInvalidStateException,
        },
    ],
};