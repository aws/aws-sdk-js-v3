import { InvalidCacheClusterStateFault } from "./InvalidCacheClusterStateFault";
import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
export type RebootCacheClusterExceptionsUnion =
  | InvalidCacheClusterStateFault
  | CacheClusterNotFoundFault;
