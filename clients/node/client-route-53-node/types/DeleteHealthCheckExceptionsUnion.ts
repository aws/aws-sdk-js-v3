import { NoSuchHealthCheck } from "./NoSuchHealthCheck";
import { HealthCheckInUse } from "./HealthCheckInUse";
import { InvalidInput } from "./InvalidInput";
export type DeleteHealthCheckExceptionsUnion =
  | NoSuchHealthCheck
  | HealthCheckInUse
  | InvalidInput;
