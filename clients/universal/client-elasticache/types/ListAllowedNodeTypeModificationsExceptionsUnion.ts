import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { ReplicationGroupNotFoundFault } from "./ReplicationGroupNotFoundFault";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
export type ListAllowedNodeTypeModificationsExceptionsUnion =
  | CacheClusterNotFoundFault
  | ReplicationGroupNotFoundFault
  | InvalidParameterCombinationException
  | InvalidParameterValueException;
