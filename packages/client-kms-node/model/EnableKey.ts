import {EnableKeyInput} from './EnableKeyInput';
import {EnableKeyOutput} from './EnableKeyOutput';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {LimitExceededException} from './LimitExceededException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const EnableKey: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'EnableKey',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: EnableKeyInput,
    },
    output: {
        shape: EnableKeyOutput,
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
            shape: LimitExceededException,
        },
        {
            shape: KMSInvalidStateException,
        },
    ],
};