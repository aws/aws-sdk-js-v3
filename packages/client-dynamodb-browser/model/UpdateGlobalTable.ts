import {UpdateGlobalTableInput} from './UpdateGlobalTableInput';
import {UpdateGlobalTableOutput} from './UpdateGlobalTableOutput';
import {InternalServerError} from './InternalServerError';
import {GlobalTableNotFoundException} from './GlobalTableNotFoundException';
import {ReplicaAlreadyExistsException} from './ReplicaAlreadyExistsException';
import {ReplicaNotFoundException} from './ReplicaNotFoundException';
import {TableNotFoundException} from './TableNotFoundException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateGlobalTable: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateGlobalTable',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateGlobalTableInput,
    },
    output: {
        shape: UpdateGlobalTableOutput,
    },
    errors: [
        {
            shape: InternalServerError,
        },
        {
            shape: GlobalTableNotFoundException,
        },
        {
            shape: ReplicaAlreadyExistsException,
        },
        {
            shape: ReplicaNotFoundException,
        },
        {
            shape: TableNotFoundException,
        },
    ],
};