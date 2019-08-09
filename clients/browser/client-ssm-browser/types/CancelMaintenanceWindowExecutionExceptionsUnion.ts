import { InternalServerError } from "./InternalServerError";
import { DoesNotExistException } from "./DoesNotExistException";
export type CancelMaintenanceWindowExecutionExceptionsUnion =
  | InternalServerError
  | DoesNotExistException;
