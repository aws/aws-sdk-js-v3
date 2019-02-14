import {UpdateTimeToLiveInput} from './UpdateTimeToLiveInput';
import {UpdateTimeToLiveOutput} from './UpdateTimeToLiveOutput';
import {ResourceInUseException} from './ResourceInUseException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {LimitExceededException} from './LimitExceededException';
import {InternalServerError} from './InternalServerError';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateTimeToLive: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateTimeToLive',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateTimeToLiveInput,
    },
    output: {
        shape: UpdateTimeToLiveOutput,
    },
    errors: [
        {
            shape: ResourceInUseException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: LimitExceededException,
        },
        {
            shape: InternalServerError,
        },
    ],
};