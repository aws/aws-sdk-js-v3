import {GetOpenIdTokenForDeveloperIdentityInput} from './GetOpenIdTokenForDeveloperIdentityInput';
import {GetOpenIdTokenForDeveloperIdentityOutput} from './GetOpenIdTokenForDeveloperIdentityOutput';
import {InvalidParameterException} from './InvalidParameterException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {NotAuthorizedException} from './NotAuthorizedException';
import {ResourceConflictException} from './ResourceConflictException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InternalErrorException} from './InternalErrorException';
import {DeveloperUserAlreadyRegisteredException} from './DeveloperUserAlreadyRegisteredException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetOpenIdTokenForDeveloperIdentity: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetOpenIdTokenForDeveloperIdentity',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetOpenIdTokenForDeveloperIdentityInput,
    },
    output: {
        shape: GetOpenIdTokenForDeveloperIdentityOutput,
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
            shape: DeveloperUserAlreadyRegisteredException,
        },
    ],
};