import { AlreadyExistsException } from "./AlreadyExistsException";
import { DoesNotExistException } from "./DoesNotExistException";
import { InvalidResourceId } from "./InvalidResourceId";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InternalServerError } from "./InternalServerError";
export type RegisterPatchBaselineForPatchGroupExceptionsUnion =
  | AlreadyExistsException
  | DoesNotExistException
  | InvalidResourceId
  | ResourceLimitExceededException
  | InternalServerError;
