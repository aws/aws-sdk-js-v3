import {UnlinkDeveloperIdentityInput} from './UnlinkDeveloperIdentityInput';
import {UnlinkDeveloperIdentityOutput} from './UnlinkDeveloperIdentityOutput';
import {InvalidParameterException} from './InvalidParameterException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {NotAuthorizedException} from './NotAuthorizedException';
import {ResourceConflictException} from './ResourceConflictException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InternalErrorException} from './InternalErrorException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UnlinkDeveloperIdentity: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UnlinkDeveloperIdentity',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UnlinkDeveloperIdentityInput,
    },
    output: {
        shape: UnlinkDeveloperIdentityOutput,
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
    ],
};