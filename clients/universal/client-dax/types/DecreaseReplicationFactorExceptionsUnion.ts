import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { NodeNotFoundFault } from "./NodeNotFoundFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type DecreaseReplicationFactorExceptionsUnion =
  | ClusterNotFoundFault
  | NodeNotFoundFault
  | InvalidClusterStateFault
  | ServiceLinkedRoleNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
