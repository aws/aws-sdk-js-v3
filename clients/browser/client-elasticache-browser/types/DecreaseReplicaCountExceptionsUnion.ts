import { ReplicationGroupNotFoundFault } from "./ReplicationGroupNotFoundFault";
import { InvalidReplicationGroupStateFault } from "./InvalidReplicationGroupStateFault";
import { InvalidCacheClusterStateFault } from "./InvalidCacheClusterStateFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { InsufficientCacheClusterCapacityFault } from "./InsufficientCacheClusterCapacityFault";
import { ClusterQuotaForCustomerExceededFault } from "./ClusterQuotaForCustomerExceededFault";
import { NodeGroupsPerReplicationGroupQuotaExceededFault } from "./NodeGroupsPerReplicationGroupQuotaExceededFault";
import { NodeQuotaForCustomerExceededFault } from "./NodeQuotaForCustomerExceededFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { NoOperationFault } from "./NoOperationFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type DecreaseReplicaCountExceptionsUnion =
  | ReplicationGroupNotFoundFault
  | InvalidReplicationGroupStateFault
  | InvalidCacheClusterStateFault
  | InvalidVPCNetworkStateFault
  | InsufficientCacheClusterCapacityFault
  | ClusterQuotaForCustomerExceededFault
  | NodeGroupsPerReplicationGroupQuotaExceededFault
  | NodeQuotaForCustomerExceededFault
  | ServiceLinkedRoleNotFoundFault
  | NoOperationFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
