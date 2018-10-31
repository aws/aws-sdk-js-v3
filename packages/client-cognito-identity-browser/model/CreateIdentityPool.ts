import {CreateIdentityPoolInput} from './CreateIdentityPoolInput';
import {CreateIdentityPoolOutput} from './CreateIdentityPoolOutput';
import {InvalidParameterException} from './InvalidParameterException';
import {NotAuthorizedException} from './NotAuthorizedException';
import {ResourceConflictException} from './ResourceConflictException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InternalErrorException} from './InternalErrorException';
import {LimitExceededException} from './LimitExceededException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateIdentityPool: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateIdentityPool',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CreateIdentityPoolInput,
    },
    output: {
        shape: CreateIdentityPoolOutput,
    },
    errors: [
        {
            shape: InvalidParameterException,
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
            shape: LimitExceededException,
        },
    ],
};