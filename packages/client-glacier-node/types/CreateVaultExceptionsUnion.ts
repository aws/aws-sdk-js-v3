import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {LimitExceededException} from './LimitExceededException';
export type CreateVaultExceptionsUnion = InvalidParameterValueException |
    MissingParameterValueException |
    ServiceUnavailableException |
    LimitExceededException;
