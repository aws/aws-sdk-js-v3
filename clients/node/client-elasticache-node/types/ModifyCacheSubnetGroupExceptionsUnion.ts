import { CacheSubnetGroupNotFoundFault } from "./CacheSubnetGroupNotFoundFault";
import { CacheSubnetQuotaExceededFault } from "./CacheSubnetQuotaExceededFault";
import { SubnetInUse } from "./SubnetInUse";
import { InvalidSubnet } from "./InvalidSubnet";
export type ModifyCacheSubnetGroupExceptionsUnion =
  | CacheSubnetGroupNotFoundFault
  | CacheSubnetQuotaExceededFault
  | SubnetInUse
  | InvalidSubnet;
