import {DisableKeyInput} from './DisableKeyInput';
import {DisableKeyOutput} from './DisableKeyOutput';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DisableKey: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DisableKey',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DisableKeyInput,
    },
    output: {
        shape: DisableKeyOutput,
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