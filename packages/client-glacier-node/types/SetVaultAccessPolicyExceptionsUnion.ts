import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
export type SetVaultAccessPolicyExceptionsUnion = ResourceNotFoundException |
    InvalidParameterValueException |
    MissingParameterValueException |
    ServiceUnavailableException;
