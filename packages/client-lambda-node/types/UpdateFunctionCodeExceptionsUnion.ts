import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {CodeStorageExceededException} from './CodeStorageExceededException';
import {PreconditionFailedException} from './PreconditionFailedException';
export type UpdateFunctionCodeExceptionsUnion = ServiceException |
    ResourceNotFoundException |
    InvalidParameterValueException |
    TooManyRequestsException |
    CodeStorageExceededException |
    PreconditionFailedException;
