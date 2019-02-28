import {GetKeyPolicyInput} from './GetKeyPolicyInput';
import {GetKeyPolicyOutput} from './GetKeyPolicyOutput';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetKeyPolicy: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetKeyPolicy',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetKeyPolicyInput,
    },
    output: {
        shape: GetKeyPolicyOutput,
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