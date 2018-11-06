import {TooManyHealthChecks} from './TooManyHealthChecks';
import {HealthCheckAlreadyExists} from './HealthCheckAlreadyExists';
import {InvalidInput} from './InvalidInput';
export type CreateHealthCheckExceptionsUnion = TooManyHealthChecks |
    HealthCheckAlreadyExists |
    InvalidInput;
