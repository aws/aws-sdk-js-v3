import {UnlinkIdentityInput} from './UnlinkIdentityInput';
import {UnlinkIdentityOutput} from './UnlinkIdentityOutput';
import {InvalidParameterException} from './InvalidParameterException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {NotAuthorizedException} from './NotAuthorizedException';
import {ResourceConflictException} from './ResourceConflictException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InternalErrorException} from './InternalErrorException';
import {ExternalServiceException} from './ExternalServiceException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UnlinkIdentity: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UnlinkIdentity',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UnlinkIdentityInput,
    },
    output: {
        shape: UnlinkIdentityOutput,
    },
    errors: [
        {
            shape: InvalidParameterException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: NotAuthorizedException,
        },
        {
            shape: ResourceConflictException,
        },
        {
            shape: TooManyRequestsException,
        },
        {
            shape: InternalErrorException,
        },
        {
            shape: ExternalServiceException,
        },
    ],
};