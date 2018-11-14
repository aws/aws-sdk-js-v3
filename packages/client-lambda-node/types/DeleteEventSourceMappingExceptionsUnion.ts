import {ServiceException} from './ServiceException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {ResourceInUseException} from './ResourceInUseException';
export type DeleteEventSourceMappingExceptionsUnion = ServiceException |
    ResourceNotFoundException |
    InvalidParameterValueException |
    TooManyRequestsException |
    ResourceInUseException;
