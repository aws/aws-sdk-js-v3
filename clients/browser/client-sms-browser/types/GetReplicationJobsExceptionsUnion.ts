import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
export type GetReplicationJobsExceptionsUnion =
  | InvalidParameterException
  | MissingRequiredParameterException
  | UnauthorizedOperationException;
