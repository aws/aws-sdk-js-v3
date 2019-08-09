import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InternalError } from "./InternalError";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
export type GetAppLaunchConfigurationExceptionsUnion =
  | UnauthorizedOperationException
  | InvalidParameterException
  | MissingRequiredParameterException
  | InternalError
  | OperationNotPermittedException;
