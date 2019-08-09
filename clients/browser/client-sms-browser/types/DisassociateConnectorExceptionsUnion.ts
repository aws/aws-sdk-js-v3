import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { InvalidParameterException } from "./InvalidParameterException";
export type DisassociateConnectorExceptionsUnion =
  | MissingRequiredParameterException
  | UnauthorizedOperationException
  | OperationNotPermittedException
  | InvalidParameterException;
