import {MergeShardsInput} from './MergeShardsInput';
import {MergeShardsOutput} from './MergeShardsOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {ResourceInUseException} from './ResourceInUseException';
import {InvalidArgumentException} from './InvalidArgumentException';
import {LimitExceededException} from './LimitExceededException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const MergeShards: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'MergeShards',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: MergeShardsInput,
    },
    output: {
        shape: MergeShardsOutput,
    },
    errors: [
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: ResourceInUseException,
        },
        {
            shape: InvalidArgumentException,
        },
        {
            shape: LimitExceededException,
        },
    ],
};