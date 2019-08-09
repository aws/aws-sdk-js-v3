import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InternalError } from "./InternalError";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
export type PutAppLaunchConfigurationExceptionsUnion =
  | UnauthorizedOperationException
  | InvalidParameterException
  | MissingRequiredParameterException
  | InternalError
  | OperationNotPermittedException;
