import {DescribeVaultInput} from './DescribeVaultInput';
import {DescribeVaultOutput} from './DescribeVaultOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeVault: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DescribeVault',
    http: {
        method: 'GET',
        requestUri: '/{accountId}/vaults/{vaultName}',
    },
    input: {
        shape: DescribeVaultInput,
    },
    output: {
        shape: DescribeVaultOutput,
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