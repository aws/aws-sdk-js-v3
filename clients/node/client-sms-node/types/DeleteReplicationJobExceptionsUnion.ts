import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ReplicationJobNotFoundException } from "./ReplicationJobNotFoundException";
export type DeleteReplicationJobExceptionsUnion =
  | InvalidParameterException
  | MissingRequiredParameterException
  | UnauthorizedOperationException
  | OperationNotPermittedException
  | ReplicationJobNotFoundException;
