import { CreateClusterInput } from "./CreateClusterInput";
import { CreateClusterOutput } from "./CreateClusterOutput";
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
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateClusterInput
  },
  output: {
    shape: CreateClusterOutput
  },
  errors: [
    {
      shape: ClusterAlreadyExistsFault
    },
    {
      shape: InvalidClusterStateFault
    },
    {
      shape: InsufficientClusterCapacityFault
    },
    {
      shape: SubnetGroupNotFoundFault
    },
    {
      shape: InvalidParameterGroupStateFault
    },
    {
      shape: ParameterGroupNotFoundFault
    },
    {
      shape: ClusterQuotaForCustomerExceededFault
    },
    {
      shape: NodeQuotaForClusterExceededFault
    },
    {
      shape: NodeQuotaForCustomerExceededFault
    },
    {
      shape: InvalidVPCNetworkStateFault
    },
    {
      shape: TagQuotaPerResourceExceeded
    },
    {
      shape: ServiceLinkedRoleNotFoundFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
