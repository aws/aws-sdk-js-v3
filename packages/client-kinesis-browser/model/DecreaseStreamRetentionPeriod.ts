import {DecreaseStreamRetentionPeriodInput} from './DecreaseStreamRetentionPeriodInput';
import {DecreaseStreamRetentionPeriodOutput} from './DecreaseStreamRetentionPeriodOutput';
import {ResourceInUseException} from './ResourceInUseException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {LimitExceededException} from './LimitExceededException';
import {InvalidArgumentException} from './InvalidArgumentException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DecreaseStreamRetentionPeriod: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DecreaseStreamRetentionPeriod',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DecreaseStreamRetentionPeriodInput,
    },
    output: {
        shape: DecreaseStreamRetentionPeriodOutput,
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
            shape: InvalidArgumentException,
        },
    ],
};