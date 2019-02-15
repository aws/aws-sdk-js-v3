import {ProvisionedThroughputExceededException} from './ProvisionedThroughputExceededException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerError} from './InternalServerError';
export type BatchGetItemExceptionsUnion = ProvisionedThroughputExceededException |
    ResourceNotFoundException |
    InternalServerError;
