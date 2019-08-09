import { InvalidResourceId } from "./InvalidResourceId";
import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
export type RegisterDefaultPatchBaselineExceptionsUnion =
  | InvalidResourceId
  | DoesNotExistException
  | InternalServerError;
