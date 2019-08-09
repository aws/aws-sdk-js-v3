import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { InvalidCacheClusterStateFault } from "./InvalidCacheClusterStateFault";
import { SnapshotAlreadyExistsFault } from "./SnapshotAlreadyExistsFault";
import { SnapshotFeatureNotSupportedFault } from "./SnapshotFeatureNotSupportedFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type DeleteCacheClusterExceptionsUnion =
  | CacheClusterNotFoundFault
  | InvalidCacheClusterStateFault
  | SnapshotAlreadyExistsFault
  | SnapshotFeatureNotSupportedFault
  | SnapshotQuotaExceededFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
