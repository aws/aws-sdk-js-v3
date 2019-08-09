import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
export type DescribeMaintenanceWindowTasksExceptionsUnion =
  | DoesNotExistException
  | InternalServerError;
