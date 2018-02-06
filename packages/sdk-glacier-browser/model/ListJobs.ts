import {ListJobsInput} from './ListJobsInput';
import {ListJobsOutput} from './ListJobsOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListJobs: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListJobs',
    http: {
        method: 'GET',
        requestUri: '/{accountId}/vaults/{vaultName}/jobs',
    },
    input: {
        shape: ListJobsInput,
    },
    output: {
        shape: ListJobsOutput,
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