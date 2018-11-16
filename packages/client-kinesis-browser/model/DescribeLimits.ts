import {DescribeLimitsInput} from './DescribeLimitsInput';
import {DescribeLimitsOutput} from './DescribeLimitsOutput';
import {LimitExceededException} from './LimitExceededException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeLimits: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DescribeLimits',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DescribeLimitsInput,
    },
    output: {
        shape: DescribeLimitsOutput,
    },
    errors: [
        {
            shape: LimitExceededException,
        },
    ],
};