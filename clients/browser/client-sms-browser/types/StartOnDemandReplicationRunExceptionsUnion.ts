import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ReplicationRunLimitExceededException } from "./ReplicationRunLimitExceededException";
export type StartOnDemandReplicationRunExceptionsUnion =
  | InvalidParameterException
  | MissingRequiredParameterException
  | UnauthorizedOperationException
  | OperationNotPermittedException
  | ReplicationRunLimitExceededException;
