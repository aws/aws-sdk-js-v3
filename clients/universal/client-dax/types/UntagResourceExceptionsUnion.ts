import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { InvalidARNFault } from "./InvalidARNFault";
import { TagNotFoundFault } from "./TagNotFoundFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type UntagResourceExceptionsUnion =
  | ClusterNotFoundFault
  | InvalidARNFault
  | TagNotFoundFault
  | InvalidClusterStateFault
  | ServiceLinkedRoleNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
