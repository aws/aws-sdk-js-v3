import {TableAlreadyExistsException} from './TableAlreadyExistsException';
import {TableNotFoundException} from './TableNotFoundException';
import {TableInUseException} from './TableInUseException';
import {LimitExceededException} from './LimitExceededException';
import {InvalidRestoreTimeException} from './InvalidRestoreTimeException';
import {PointInTimeRecoveryUnavailableException} from './PointInTimeRecoveryUnavailableException';
import {InternalServerError} from './InternalServerError';
export type RestoreTableToPointInTimeExceptionsUnion = TableAlreadyExistsException |
    TableNotFoundException |
    TableInUseException |
    LimitExceededException |
    InvalidRestoreTimeException |
    PointInTimeRecoveryUnavailableException |
    InternalServerError;
