import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { NoConnectorsAvailableException } from "./NoConnectorsAvailableException";
export type ImportServerCatalogExceptionsUnion =
  | UnauthorizedOperationException
  | OperationNotPermittedException
  | InvalidParameterException
  | MissingRequiredParameterException
  | NoConnectorsAvailableException;
