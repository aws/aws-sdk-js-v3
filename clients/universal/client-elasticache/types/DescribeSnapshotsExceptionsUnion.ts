import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { SnapshotNotFoundFault } from "./SnapshotNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type DescribeSnapshotsExceptionsUnion =
  | CacheClusterNotFoundFault
  | SnapshotNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
