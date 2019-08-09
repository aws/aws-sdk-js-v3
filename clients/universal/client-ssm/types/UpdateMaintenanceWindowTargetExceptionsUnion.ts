import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
export type UpdateMaintenanceWindowTargetExceptionsUnion =
  | DoesNotExistException
  | InternalServerError;
