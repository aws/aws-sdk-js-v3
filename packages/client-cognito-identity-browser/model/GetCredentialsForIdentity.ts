import {GetCredentialsForIdentityInput} from './GetCredentialsForIdentityInput';
import {GetCredentialsForIdentityOutput} from './GetCredentialsForIdentityOutput';
import {InvalidParameterException} from './InvalidParameterException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {NotAuthorizedException} from './NotAuthorizedException';
import {ResourceConflictException} from './ResourceConflictException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InvalidIdentityPoolConfigurationException} from './InvalidIdentityPoolConfigurationException';
import {InternalErrorException} from './InternalErrorException';
import {ExternalServiceException} from './ExternalServiceException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetCredentialsForIdentity: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetCredentialsForIdentity',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetCredentialsForIdentityInput,
    },
    output: {
        shape: GetCredentialsForIdentityOutput,
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
            shape: InvalidIdentityPoolConfigurationException,
        },
        {
            shape: InternalErrorException,
        },
        {
            shape: ExternalServiceException,
        },
    ],
};