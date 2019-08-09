import { ClusterAlreadyExistsFault } from "./ClusterAlreadyExistsFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { InsufficientClusterCapacityFault } from "./InsufficientClusterCapacityFault";
import { SubnetGroupNotFoundFault } from "./SubnetGroupNotFoundFault";
import { InvalidParameterGroupStateFault } from "./InvalidParameterGroupStateFault";
import { ParameterGroupNotFoundFault } from "./ParameterGroupNotFoundFault";
import { ClusterQuotaForCustomerExceededFault } from "./ClusterQuotaForCustomerExceededFault";
import { NodeQuotaForClusterExceededFault } from "./NodeQuotaForClusterExceededFault";
import { NodeQuotaForCustomerExceededFault } from "./NodeQuotaForCustomerExceededFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { TagQuotaPerResourceExceeded } from "./TagQuotaPerResourceExceeded";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type CreateClusterExceptionsUnion =
  | ClusterAlreadyExistsFault
  | InvalidClusterStateFault
  | InsufficientClusterCapacityFault
  | SubnetGroupNotFoundFault
  | InvalidParameterGroupStateFault
  | ParameterGroupNotFoundFault
  | ClusterQuotaForCustomerExceededFault
  | NodeQuotaForClusterExceededFault
  | NodeQuotaForCustomerExceededFault
  | InvalidVPCNetworkStateFault
  | TagQuotaPerResourceExceeded
  | ServiceLinkedRoleNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
