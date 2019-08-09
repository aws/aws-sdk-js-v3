import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DescribeActivitiesExceptionsUnion =
  | UnauthorizedOperationException
  | UnauthorizedResourceAccessException
  | InvalidArgumentException
  | FailedDependencyException
  | ServiceUnavailableException;
