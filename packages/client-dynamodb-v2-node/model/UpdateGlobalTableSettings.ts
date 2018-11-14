import {UpdateGlobalTableSettingsInput} from './UpdateGlobalTableSettingsInput';
import {UpdateGlobalTableSettingsOutput} from './UpdateGlobalTableSettingsOutput';
import {GlobalTableNotFoundException} from './GlobalTableNotFoundException';
import {ReplicaNotFoundException} from './ReplicaNotFoundException';
import {IndexNotFoundException} from './IndexNotFoundException';
import {LimitExceededException} from './LimitExceededException';
import {ResourceInUseException} from './ResourceInUseException';
import {InternalServerError} from './InternalServerError';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateGlobalTableSettings: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateGlobalTableSettings',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateGlobalTableSettingsInput,
    },
    output: {
        shape: UpdateGlobalTableSettingsOutput,
    },
    errors: [
        {
            shape: GlobalTableNotFoundException,
        },
        {
            shape: ReplicaNotFoundException,
        },
        {
            shape: IndexNotFoundException,
        },
        {
            shape: LimitExceededException,
        },
        {
            shape: ResourceInUseException,
        },
        {
            shape: InternalServerError,
        },
    ],
};