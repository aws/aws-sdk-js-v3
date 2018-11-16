import {ResourceInUseException} from './ResourceInUseException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {LimitExceededException} from './LimitExceededException';
import {InternalServerError} from './InternalServerError';
export type UpdateTimeToLiveExceptionsUnion = ResourceInUseException |
    ResourceNotFoundException |
    LimitExceededException |
    InternalServerError;
