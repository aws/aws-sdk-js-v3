import {PutKeyPolicyInput} from './PutKeyPolicyInput';
import {PutKeyPolicyOutput} from './PutKeyPolicyOutput';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {MalformedPolicyDocumentException} from './MalformedPolicyDocumentException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {UnsupportedOperationException} from './UnsupportedOperationException';
import {KMSInternalException} from './KMSInternalException';
import {LimitExceededException} from './LimitExceededException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutKeyPolicy: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutKeyPolicy',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: PutKeyPolicyInput,
    },
    output: {
        shape: PutKeyPolicyOutput,
    },
    errors: [
        {
            shape: NotFoundException,
        },
        {
            shape: InvalidArnException,
        },
        {
            shape: MalformedPolicyDocumentException,
        },
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: UnsupportedOperationException,
        },
        {
            shape: KMSInternalException,
        },
        {
            shape: LimitExceededException,
        },
        {
            shape: KMSInvalidStateException,
        },
    ],
};