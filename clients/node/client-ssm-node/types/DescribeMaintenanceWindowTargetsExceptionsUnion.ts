import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
export type DescribeMaintenanceWindowTargetsExceptionsUnion =
  | DoesNotExistException
  | InternalServerError;
