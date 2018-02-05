import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {LimitExceededException} from './LimitExceededException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
export type PurchaseProvisionedCapacityExceptionsUnion = InvalidParameterValueException |
    MissingParameterValueException |
    LimitExceededException |
    ServiceUnavailableException;
