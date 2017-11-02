import {ListTablesInput} from './ListTablesInput';
import {ListTablesOutput} from './ListTablesOutput';
import {InternalServerError} from './InternalServerError';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListTables: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListTables',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListTablesInput,
    },
    output: {
        shape: ListTablesOutput,
    },
    errors: [
        {
            shape: InternalServerError,
        },
    ],
};