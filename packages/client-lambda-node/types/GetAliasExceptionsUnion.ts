import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {TooManyRequestsException} from './TooManyRequestsException';
export type GetAliasExceptionsUnion = ServiceException |
    ResourceNotFoundException |
    InvalidParameterValueException |
    TooManyRequestsException;
