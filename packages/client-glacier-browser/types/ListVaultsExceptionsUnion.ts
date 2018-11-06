import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
export type ListVaultsExceptionsUnion = ResourceNotFoundException |
    InvalidParameterValueException |
    MissingParameterValueException |
    ServiceUnavailableException;
