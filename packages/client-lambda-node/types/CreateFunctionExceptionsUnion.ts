import {ServiceException} from './ServiceException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {ResourceConflictException} from './ResourceConflictException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {CodeStorageExceededException} from './CodeStorageExceededException';
export type CreateFunctionExceptionsUnion = ServiceException |
    InvalidParameterValueException |
    ResourceNotFoundException |
    ResourceConflictException |
    TooManyRequestsException |
    CodeStorageExceededException;
