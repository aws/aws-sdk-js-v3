import {UpdateShardCountInput} from './UpdateShardCountInput';
import {UpdateShardCountOutput} from './UpdateShardCountOutput';
import {InvalidArgumentException} from './InvalidArgumentException';
import {LimitExceededException} from './LimitExceededException';
import {ResourceInUseException} from './ResourceInUseException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateShardCount: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateShardCount',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateShardCountInput,
    },
    output: {
        shape: UpdateShardCountOutput,
    },
    errors: [
        {
            shape: InvalidArgumentException,
        },
        {
            shape: LimitExceededException,
        },
        {
            shape: ResourceInUseException,
        },
        {
            shape: ResourceNotFoundException,
        },
    ],
};