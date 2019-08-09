import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
export type TerminateSessionExceptionsUnion =
  | DoesNotExistException
  | InternalServerError;
