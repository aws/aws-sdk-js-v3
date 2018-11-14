import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
export type GetFunctionConfigurationExceptionsUnion = ServiceException |
    ResourceNotFoundException |
    TooManyRequestsException |
    InvalidParameterValueException;
