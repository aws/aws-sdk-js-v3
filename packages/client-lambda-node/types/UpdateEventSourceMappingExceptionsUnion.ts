import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {ResourceConflictException} from './ResourceConflictException';
import {ResourceInUseException} from './ResourceInUseException';
export type UpdateEventSourceMappingExceptionsUnion = ServiceException |
    ResourceNotFoundException |
    InvalidParameterValueException |
    TooManyRequestsException |
    ResourceConflictException |
    ResourceInUseException;
