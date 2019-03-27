import {ListKeyPoliciesInput} from './ListKeyPoliciesInput';
import {ListKeyPoliciesOutput} from './ListKeyPoliciesOutput';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListKeyPolicies: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListKeyPolicies',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListKeyPoliciesInput,
    },
    output: {
        shape: ListKeyPoliciesOutput,
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