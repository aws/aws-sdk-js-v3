import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
export type GetMaintenanceWindowExceptionsUnion =
  | DoesNotExistException
  | InternalServerError;
