import {DescribeTableInput} from './DescribeTableInput';
import {DescribeTableOutput} from './DescribeTableOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerError} from './InternalServerError';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeTable: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DescribeTable',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DescribeTableInput,
    },
    output: {
        shape: DescribeTableOutput,
    },
    errors: [
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InternalServerError,
        },
    ],
};