import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type GetResourcesExceptionsUnion =
  | UnauthorizedResourceAccessException
  | UnauthorizedOperationException
  | InvalidArgumentException
  | FailedDependencyException
  | ServiceUnavailableException;
