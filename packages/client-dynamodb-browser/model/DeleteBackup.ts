import {DeleteBackupInput} from './DeleteBackupInput';
import {DeleteBackupOutput} from './DeleteBackupOutput';
import {BackupNotFoundException} from './BackupNotFoundException';
import {BackupInUseException} from './BackupInUseException';
import {LimitExceededException} from './LimitExceededException';
import {InternalServerError} from './InternalServerError';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteBackup: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteBackup',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteBackupInput,
    },
    output: {
        shape: DeleteBackupOutput,
    },
    errors: [
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