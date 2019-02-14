import {RestoreTableFromBackupInput} from './RestoreTableFromBackupInput';
import {RestoreTableFromBackupOutput} from './RestoreTableFromBackupOutput';
import {TableAlreadyExistsException} from './TableAlreadyExistsException';
import {TableInUseException} from './TableInUseException';
import {BackupNotFoundException} from './BackupNotFoundException';
import {BackupInUseException} from './BackupInUseException';
import {LimitExceededException} from './LimitExceededException';
import {InternalServerError} from './InternalServerError';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const RestoreTableFromBackup: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'RestoreTableFromBackup',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: RestoreTableFromBackupInput,
    },
    output: {
        shape: RestoreTableFromBackupOutput,
    },
    errors: [
        {
            shape: TableAlreadyExistsException,
        },
        {
            shape: TableInUseException,
        },
        {
            shape: BackupNotFoundException,
        },
        {
            shape: BackupInUseException,
        },
        {
            shape: LimitExceededException,
        },
        {
            shape: InternalServerError,
        },
    ],
};