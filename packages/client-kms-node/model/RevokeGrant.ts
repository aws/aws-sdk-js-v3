import {RevokeGrantInput} from './RevokeGrantInput';
import {RevokeGrantOutput} from './RevokeGrantOutput';
import {NotFoundException} from './NotFoundException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidArnException} from './InvalidArnException';
import {InvalidGrantIdException} from './InvalidGrantIdException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const RevokeGrant: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'RevokeGrant',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: RevokeGrantInput,
    },
    output: {
        shape: RevokeGrantOutput,
    },
    errors: [
        {
            shape: NotFoundException,
        },
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: InvalidArnException,
        },
        {
            shape: InvalidGrantIdException,
        },
        {
            shape: KMSInternalException,
        },
        {
            shape: KMSInvalidStateException,
        },
    ],
};