import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { InvalidARNFault } from "./InvalidARNFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type ListTagsExceptionsUnion =
  | ClusterNotFoundFault
  | InvalidARNFault
  | InvalidClusterStateFault
  | ServiceLinkedRoleNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
