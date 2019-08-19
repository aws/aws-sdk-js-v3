import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
export type DeleteServerCatalogExceptionsUnion =
  | UnauthorizedOperationException
  | OperationNotPermittedException
  | InvalidParameterException
  | MissingRequiredParameterException;
