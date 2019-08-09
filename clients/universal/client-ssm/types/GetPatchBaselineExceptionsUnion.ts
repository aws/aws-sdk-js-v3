import { DoesNotExistException } from "./DoesNotExistException";
import { InvalidResourceId } from "./InvalidResourceId";
import { InternalServerError } from "./InternalServerError";
export type GetPatchBaselineExceptionsUnion =
  | DoesNotExistException
  | InvalidResourceId
  | InternalServerError;
