import {ServiceException} from './ServiceException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {TooManyRequestsException} from './TooManyRequestsException';
export type PutFunctionConcurrencyExceptionsUnion = ServiceException |
    InvalidParameterValueException |
    ResourceNotFoundException |
    TooManyRequestsException;
