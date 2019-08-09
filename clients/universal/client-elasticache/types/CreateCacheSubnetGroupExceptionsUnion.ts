import { CacheSubnetGroupAlreadyExistsFault } from "./CacheSubnetGroupAlreadyExistsFault";
import { CacheSubnetGroupQuotaExceededFault } from "./CacheSubnetGroupQuotaExceededFault";
import { CacheSubnetQuotaExceededFault } from "./CacheSubnetQuotaExceededFault";
import { InvalidSubnet } from "./InvalidSubnet";
export type CreateCacheSubnetGroupExceptionsUnion =
  | CacheSubnetGroupAlreadyExistsFault
  | CacheSubnetGroupQuotaExceededFault
  | CacheSubnetQuotaExceededFault
  | InvalidSubnet;
