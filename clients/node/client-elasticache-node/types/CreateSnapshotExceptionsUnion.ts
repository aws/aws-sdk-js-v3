import { SnapshotAlreadyExistsFault } from "./SnapshotAlreadyExistsFault";
import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { ReplicationGroupNotFoundFault } from "./ReplicationGroupNotFoundFault";
import { InvalidCacheClusterStateFault } from "./InvalidCacheClusterStateFault";
import { InvalidReplicationGroupStateFault } from "./InvalidReplicationGroupStateFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { SnapshotFeatureNotSupportedFault } from "./SnapshotFeatureNotSupportedFault";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
export type CreateSnapshotExceptionsUnion =
  | SnapshotAlreadyExistsFault
  | CacheClusterNotFoundFault
  | ReplicationGroupNotFoundFault
  | InvalidCacheClusterStateFault
  | InvalidReplicationGroupStateFault
  | SnapshotQuotaExceededFault
  | SnapshotFeatureNotSupportedFault
  | InvalidParameterCombinationException
  | InvalidParameterValueException;
