import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { NodeNotFoundFault } from "./NodeNotFoundFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type RebootNodeExceptionsUnion =
  | ClusterNotFoundFault
  | NodeNotFoundFault
  | InvalidClusterStateFault
  | ServiceLinkedRoleNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
