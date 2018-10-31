import {UpdateIdentityPoolInput} from './UpdateIdentityPoolInput';
import {UpdateIdentityPoolOutput} from './UpdateIdentityPoolOutput';
import {InvalidParameterException} from './InvalidParameterException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {NotAuthorizedException} from './NotAuthorizedException';
import {ResourceConflictException} from './ResourceConflictException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InternalErrorException} from './InternalErrorException';
import {ConcurrentModificationException} from './ConcurrentModificationException';
import {LimitExceededException} from './LimitExceededException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateIdentityPool: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateIdentityPool',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateIdentityPoolInput,
    },
    output: {
        shape: UpdateIdentityPoolOutput,
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
            shape: ConcurrentModificationException,
        },
        {
            shape: LimitExceededException,
        },
    ],
};