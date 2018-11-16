import {ListShardsInput} from './ListShardsInput';
import {ListShardsOutput} from './ListShardsOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidArgumentException} from './InvalidArgumentException';
import {LimitExceededException} from './LimitExceededException';
import {ExpiredNextTokenException} from './ExpiredNextTokenException';
import {ResourceInUseException} from './ResourceInUseException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListShards: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListShards',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListShardsInput,
    },
    output: {
        shape: ListShardsOutput,
    },
    errors: [
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InvalidArgumentException,
        },
        {
            shape: LimitExceededException,
        },
        {
            shape: ExpiredNextTokenException,
        },
        {
            shape: ResourceInUseException,
        },
    ],
};