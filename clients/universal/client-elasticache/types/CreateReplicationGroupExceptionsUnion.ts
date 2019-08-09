import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { InvalidCacheClusterStateFault } from "./InvalidCacheClusterStateFault";
import { ReplicationGroupAlreadyExistsFault } from "./ReplicationGroupAlreadyExistsFault";
import { InsufficientCacheClusterCapacityFault } from "./InsufficientCacheClusterCapacityFault";
import { CacheSecurityGroupNotFoundFault } from "./CacheSecurityGroupNotFoundFault";
import { CacheSubnetGroupNotFoundFault } from "./CacheSubnetGroupNotFoundFault";
import { ClusterQuotaForCustomerExceededFault } from "./ClusterQuotaForCustomerExceededFault";
import { NodeQuotaForClusterExceededFault } from "./NodeQuotaForClusterExceededFault";
import { NodeQuotaForCustomerExceededFault } from "./NodeQuotaForCustomerExceededFault";
import { CacheParameterGroupNotFoundFault } from "./CacheParameterGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { TagQuotaPerResourceExceeded } from "./TagQuotaPerResourceExceeded";
import { NodeGroupsPerReplicationGroupQuotaExceededFault } from "./NodeGroupsPerReplicationGroupQuotaExceededFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type CreateReplicationGroupExceptionsUnion =
  | CacheClusterNotFoundFault
  | InvalidCacheClusterStateFault
  | ReplicationGroupAlreadyExistsFault
  | InsufficientCacheClusterCapacityFault
  | CacheSecurityGroupNotFoundFault
  | CacheSubnetGroupNotFoundFault
  | ClusterQuotaForCustomerExceededFault
  | NodeQuotaForClusterExceededFault
  | NodeQuotaForCustomerExceededFault
  | CacheParameterGroupNotFoundFault
  | InvalidVPCNetworkStateFault
  | TagQuotaPerResourceExceeded
  | NodeGroupsPerReplicationGroupQuotaExceededFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
