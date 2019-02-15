import {DescribeContinuousBackupsInput} from './DescribeContinuousBackupsInput';
import {DescribeContinuousBackupsOutput} from './DescribeContinuousBackupsOutput';
import {TableNotFoundException} from './TableNotFoundException';
import {InternalServerError} from './InternalServerError';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeContinuousBackups: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DescribeContinuousBackups',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DescribeContinuousBackupsInput,
    },
    output: {
        shape: DescribeContinuousBackupsOutput,
    },
    errors: [
        {
            shape: TableNotFoundException,
        },
        {
            shape: InternalServerError,
        },
    ],
};