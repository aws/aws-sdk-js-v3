import { CacheSubnetGroupInUse } from "./CacheSubnetGroupInUse";
import { CacheSubnetGroupNotFoundFault } from "./CacheSubnetGroupNotFoundFault";
export type DeleteCacheSubnetGroupExceptionsUnion =
  | CacheSubnetGroupInUse
  | CacheSubnetGroupNotFoundFault;
