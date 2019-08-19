import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InternalError } from "./InternalError";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
export type GetAppExceptionsUnion =
  | UnauthorizedOperationException
  | InvalidParameterException
  | MissingRequiredParameterException
  | InternalError
  | OperationNotPermittedException;
