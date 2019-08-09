import { ConflictErrorException } from "./ConflictErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ResourceInUseException } from "./ResourceInUseException";
export type StartContinuousExportExceptionsUnion =
  | ConflictErrorException
  | AuthorizationErrorException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | OperationNotPermittedException
  | ResourceInUseException;
