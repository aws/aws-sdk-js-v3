import {ListGlobalTablesInput} from './ListGlobalTablesInput';
import {ListGlobalTablesOutput} from './ListGlobalTablesOutput';
import {InternalServerError} from './InternalServerError';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListGlobalTables: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListGlobalTables',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListGlobalTablesInput,
    },
    output: {
        shape: ListGlobalTablesOutput,
    },
    errors: [
        {
            shape: InternalServerError,
        },
    ],
};