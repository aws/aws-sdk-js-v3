import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
export type GetMaintenanceWindowExecutionTaskInvocationExceptionsUnion =
  | DoesNotExistException
  | InternalServerError;
