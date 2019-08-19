import { ReplicationGroupNotFoundFault } from "./ReplicationGroupNotFoundFault";
import { InvalidReplicationGroupStateFault } from "./InvalidReplicationGroupStateFault";
import { CacheClusterAlreadyExistsFault } from "./CacheClusterAlreadyExistsFault";
import { InsufficientCacheClusterCapacityFault } from "./InsufficientCacheClusterCapacityFault";
import { CacheSecurityGroupNotFoundFault } from "./CacheSecurityGroupNotFoundFault";
import { CacheSubnetGroupNotFoundFault } from "./CacheSubnetGroupNotFoundFault";
import { ClusterQuotaForCustomerExceededFault } from "./ClusterQuotaForCustomerExceededFault";
import { NodeQuotaForClusterExceededFault } from "./NodeQuotaForClusterExceededFault";
import { NodeQuotaForCustomerExceededFault } from "./NodeQuotaForCustomerExceededFault";
import { CacheParameterGroupNotFoundFault } from "./CacheParameterGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { TagQuotaPerResourceExceeded } from "./TagQuotaPerResourceExceeded";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type CreateCacheClusterExceptionsUnion =
  | ReplicationGroupNotFoundFault
  | InvalidReplicationGroupStateFault
  | CacheClusterAlreadyExistsFault
  | InsufficientCacheClusterCapacityFault
  | CacheSecurityGroupNotFoundFault
  | CacheSubnetGroupNotFoundFault
  | ClusterQuotaForCustomerExceededFault
  | NodeQuotaForClusterExceededFault
  | NodeQuotaForCustomerExceededFault
  | CacheParameterGroupNotFoundFault
  | InvalidVPCNetworkStateFault
  | TagQuotaPerResourceExceeded
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
