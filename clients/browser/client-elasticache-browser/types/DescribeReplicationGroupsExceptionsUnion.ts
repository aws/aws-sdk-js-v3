import { ReplicationGroupNotFoundFault } from "./ReplicationGroupNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type DescribeReplicationGroupsExceptionsUnion =
  | ReplicationGroupNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
