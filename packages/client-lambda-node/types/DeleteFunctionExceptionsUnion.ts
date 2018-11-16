import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {ResourceConflictException} from './ResourceConflictException';
export type DeleteFunctionExceptionsUnion = ServiceException |
    ResourceNotFoundException |
    TooManyRequestsException |
    InvalidParameterValueException |
    ResourceConflictException;
