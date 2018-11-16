import {CreateGlobalTableInput} from './CreateGlobalTableInput';
import {CreateGlobalTableOutput} from './CreateGlobalTableOutput';
import {LimitExceededException} from './LimitExceededException';
import {InternalServerError} from './InternalServerError';
import {GlobalTableAlreadyExistsException} from './GlobalTableAlreadyExistsException';
import {TableNotFoundException} from './TableNotFoundException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateGlobalTable: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateGlobalTable',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CreateGlobalTableInput,
    },
    output: {
        shape: CreateGlobalTableOutput,
    },
    errors: [
        {
            shape: LimitExceededException,
        },
        {
            shape: InternalServerError,
        },
        {
            shape: GlobalTableAlreadyExistsException,
        },
        {
            shape: TableNotFoundException,
        },
    ],
};