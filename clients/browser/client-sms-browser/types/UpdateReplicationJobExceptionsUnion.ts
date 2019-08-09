import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { ServerCannotBeReplicatedException } from "./ServerCannotBeReplicatedException";
import { ReplicationJobNotFoundException } from "./ReplicationJobNotFoundException";
import { InternalError } from "./InternalError";
import { TemporarilyUnavailableException } from "./TemporarilyUnavailableException";
export type UpdateReplicationJobExceptionsUnion =
  | InvalidParameterException
  | MissingRequiredParameterException
  | OperationNotPermittedException
  | UnauthorizedOperationException
  | ServerCannotBeReplicatedException
  | ReplicationJobNotFoundException
  | InternalError
  | TemporarilyUnavailableException;
