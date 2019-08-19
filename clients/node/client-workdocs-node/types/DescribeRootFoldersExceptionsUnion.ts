import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DescribeRootFoldersExceptionsUnion =
  | UnauthorizedOperationException
  | UnauthorizedResourceAccessException
  | InvalidArgumentException
  | FailedDependencyException
  | ServiceUnavailableException;
