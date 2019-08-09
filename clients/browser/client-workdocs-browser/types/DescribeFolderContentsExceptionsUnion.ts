import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ProhibitedStateException } from "./ProhibitedStateException";
export type DescribeFolderContentsExceptionsUnion =
  | EntityNotExistsException
  | UnauthorizedResourceAccessException
  | InvalidArgumentException
  | FailedDependencyException
  | ServiceUnavailableException
  | ProhibitedStateException;
