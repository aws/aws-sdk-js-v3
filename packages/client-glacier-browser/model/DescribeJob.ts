import {DescribeJobInput} from './DescribeJobInput';
import {DescribeJobOutput} from './DescribeJobOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeJob: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DescribeJob',
    http: {
        method: 'GET',
        requestUri: '/{accountId}/vaults/{vaultName}/jobs/{jobId}',
    },
    input: {
        shape: DescribeJobInput,
    },
    output: {
        shape: DescribeJobOutput,
    },
    errors: [
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InvalidParameterValueException,
        },
        {
            shape: MissingParameterValueException,
        },
        {
            shape: ServiceUnavailableException,
        },
    ],
};