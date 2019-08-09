import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
import { TargetInUseException } from "./TargetInUseException";
export type DeregisterTargetFromMaintenanceWindowExceptionsUnion =
  | DoesNotExistException
  | InternalServerError
  | TargetInUseException;
