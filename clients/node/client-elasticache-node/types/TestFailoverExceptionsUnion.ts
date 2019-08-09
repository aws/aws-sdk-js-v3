import { APICallRateForCustomerExceededFault } from "./APICallRateForCustomerExceededFault";
import { InvalidCacheClusterStateFault } from "./InvalidCacheClusterStateFault";
import { InvalidReplicationGroupStateFault } from "./InvalidReplicationGroupStateFault";
import { NodeGroupNotFoundFault } from "./NodeGroupNotFoundFault";
import { ReplicationGroupNotFoundFault } from "./ReplicationGroupNotFoundFault";
import { TestFailoverNotAvailableFault } from "./TestFailoverNotAvailableFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type TestFailoverExceptionsUnion =
  | APICallRateForCustomerExceededFault
  | InvalidCacheClusterStateFault
  | InvalidReplicationGroupStateFault
  | NodeGroupNotFoundFault
  | ReplicationGroupNotFoundFault
  | TestFailoverNotAvailableFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
