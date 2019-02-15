import {GetItemInput} from './GetItemInput';
import {GetItemOutput} from './GetItemOutput';
import {ProvisionedThroughputExceededException} from './ProvisionedThroughputExceededException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerError} from './InternalServerError';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetItem: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetItem',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetItemInput,
    },
    output: {
        shape: GetItemOutput,
    },
    errors: [
        {
            shape: ProvisionedThroughputExceededException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InternalServerError,
        },
    ],
};