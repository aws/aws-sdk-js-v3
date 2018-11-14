import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {ResourceConflictException} from './ResourceConflictException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {PolicyLengthExceededException} from './PolicyLengthExceededException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {PreconditionFailedException} from './PreconditionFailedException';
export type AddPermissionExceptionsUnion = ServiceException |
    ResourceNotFoundException |
    ResourceConflictException |
    InvalidParameterValueException |
    PolicyLengthExceededException |
    TooManyRequestsException |
    PreconditionFailedException;
