import { ReplicationGroupNotFoundFault } from "./ReplicationGroupNotFoundFault";
import { InvalidReplicationGroupStateFault } from "./InvalidReplicationGroupStateFault";
import { InvalidCacheClusterStateFault } from "./InvalidCacheClusterStateFault";
import { InvalidCacheSecurityGroupStateFault } from "./InvalidCacheSecurityGroupStateFault";
import { InsufficientCacheClusterCapacityFault } from "./InsufficientCacheClusterCapacityFault";
import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { NodeQuotaForClusterExceededFault } from "./NodeQuotaForClusterExceededFault";
import { NodeQuotaForCustomerExceededFault } from "./NodeQuotaForCustomerExceededFault";
import { CacheSecurityGroupNotFoundFault } from "./CacheSecurityGroupNotFoundFault";
import { CacheParameterGroupNotFoundFault } from "./CacheParameterGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type ModifyReplicationGroupExceptionsUnion =
  | ReplicationGroupNotFoundFault
  | InvalidReplicationGroupStateFault
  | InvalidCacheClusterStateFault
  | InvalidCacheSecurityGroupStateFault
  | InsufficientCacheClusterCapacityFault
  | CacheClusterNotFoundFault
  | NodeQuotaForClusterExceededFault
  | NodeQuotaForCustomerExceededFault
  | CacheSecurityGroupNotFoundFault
  | CacheParameterGroupNotFoundFault
  | InvalidVPCNetworkStateFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
