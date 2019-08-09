import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
export type GetMaintenanceWindowExecutionExceptionsUnion =
  | DoesNotExistException
  | InternalServerError;
