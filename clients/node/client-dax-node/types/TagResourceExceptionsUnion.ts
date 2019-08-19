import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { TagQuotaPerResourceExceeded } from "./TagQuotaPerResourceExceeded";
import { InvalidARNFault } from "./InvalidARNFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type TagResourceExceptionsUnion =
  | ClusterNotFoundFault
  | TagQuotaPerResourceExceeded
  | InvalidARNFault
  | InvalidClusterStateFault
  | ServiceLinkedRoleNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
