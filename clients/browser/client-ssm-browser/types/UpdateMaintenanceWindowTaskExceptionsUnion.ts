import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
export type UpdateMaintenanceWindowTaskExceptionsUnion =
  | DoesNotExistException
  | InternalServerError;
