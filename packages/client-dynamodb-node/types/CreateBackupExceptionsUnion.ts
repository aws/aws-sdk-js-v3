import {TableNotFoundException} from './TableNotFoundException';
import {TableInUseException} from './TableInUseException';
import {ContinuousBackupsUnavailableException} from './ContinuousBackupsUnavailableException';
import {BackupInUseException} from './BackupInUseException';
import {LimitExceededException} from './LimitExceededException';
import {InternalServerError} from './InternalServerError';
export type CreateBackupExceptionsUnion = TableNotFoundException |
    TableInUseException |
    ContinuousBackupsUnavailableException |
    BackupInUseException |
    LimitExceededException |
    InternalServerError;
