import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
export type DescribeMaintenanceWindowExecutionTasksExceptionsUnion =
  | DoesNotExistException
  | InternalServerError;
