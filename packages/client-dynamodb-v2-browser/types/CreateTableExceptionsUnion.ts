import {ResourceInUseException} from './ResourceInUseException';
import {LimitExceededException} from './LimitExceededException';
import {InternalServerError} from './InternalServerError';
export type CreateTableExceptionsUnion = ResourceInUseException |
    LimitExceededException |
    InternalServerError;
