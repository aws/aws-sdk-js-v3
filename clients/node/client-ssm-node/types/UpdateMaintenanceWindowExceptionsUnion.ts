import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
export type UpdateMaintenanceWindowExceptionsUnion =
  | DoesNotExistException
  | InternalServerError;
