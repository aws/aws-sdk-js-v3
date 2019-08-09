import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
export type GetMaintenanceWindowTaskExceptionsUnion =
  | DoesNotExistException
  | InternalServerError;
