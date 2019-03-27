import {DescribeKeyInput} from './DescribeKeyInput';
import {DescribeKeyOutput} from './DescribeKeyOutput';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeKey: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DescribeKey',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DescribeKeyInput,
    },
    output: {
        shape: DescribeKeyOutput,
    },
    errors: [
        {
            shape: NotFoundException,
        },
        {
            shape: InvalidArnException,
        },
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: KMSInternalException,
        },
    ],
};