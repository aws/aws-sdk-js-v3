import {CreateGrantInput} from './CreateGrantInput';
import {CreateGrantOutput} from './CreateGrantOutput';
import {NotFoundException} from './NotFoundException';
import {DisabledException} from './DisabledException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidArnException} from './InvalidArnException';
import {KMSInternalException} from './KMSInternalException';
import {InvalidGrantTokenException} from './InvalidGrantTokenException';
import {LimitExceededException} from './LimitExceededException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateGrant: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateGrant',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CreateGrantInput,
    },
    output: {
        shape: CreateGrantOutput,
    },
    errors: [
        {
            shape: NotFoundException,
        },
        {
            shape: DisabledException,
        },
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: InvalidArnException,
        },
        {
            shape: KMSInternalException,
        },
        {
            shape: InvalidGrantTokenException,
        },
        {
            shape: LimitExceededException,
        },
        {
            shape: KMSInvalidStateException,
        },
    ],
};