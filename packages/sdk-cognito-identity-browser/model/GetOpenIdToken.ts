import {GetOpenIdTokenInput} from './GetOpenIdTokenInput';
import {GetOpenIdTokenOutput} from './GetOpenIdTokenOutput';
import {InvalidParameterException} from './InvalidParameterException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {NotAuthorizedException} from './NotAuthorizedException';
import {ResourceConflictException} from './ResourceConflictException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InternalErrorException} from './InternalErrorException';
import {ExternalServiceException} from './ExternalServiceException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetOpenIdToken: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetOpenIdToken',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetOpenIdTokenInput,
    },
    output: {
        shape: GetOpenIdTokenOutput,
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