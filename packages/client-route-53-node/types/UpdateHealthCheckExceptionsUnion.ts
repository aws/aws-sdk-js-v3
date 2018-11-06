import {NoSuchHealthCheck} from './NoSuchHealthCheck';
import {InvalidInput} from './InvalidInput';
import {HealthCheckVersionMismatch} from './HealthCheckVersionMismatch';
export type UpdateHealthCheckExceptionsUnion = NoSuchHealthCheck |
    InvalidInput |
    HealthCheckVersionMismatch;
