import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ServerCannotBeReplicatedException } from "./ServerCannotBeReplicatedException";
import { ReplicationJobAlreadyExistsException } from "./ReplicationJobAlreadyExistsException";
import { NoConnectorsAvailableException } from "./NoConnectorsAvailableException";
import { InternalError } from "./InternalError";
import { TemporarilyUnavailableException } from "./TemporarilyUnavailableException";
export type CreateReplicationJobExceptionsUnion =
  | InvalidParameterException
  | MissingRequiredParameterException
  | UnauthorizedOperationException
  | OperationNotPermittedException
  | ServerCannotBeReplicatedException
  | ReplicationJobAlreadyExistsException
  | NoConnectorsAvailableException
  | InternalError
  | TemporarilyUnavailableException;
