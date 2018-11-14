import {TableAlreadyExistsException} from './TableAlreadyExistsException';
import {TableInUseException} from './TableInUseException';
import {BackupNotFoundException} from './BackupNotFoundException';
import {BackupInUseException} from './BackupInUseException';
import {LimitExceededException} from './LimitExceededException';
import {InternalServerError} from './InternalServerError';
export type RestoreTableFromBackupExceptionsUnion = TableAlreadyExistsException |
    TableInUseException |
    BackupNotFoundException |
    BackupInUseException |
    LimitExceededException |
    InternalServerError;
