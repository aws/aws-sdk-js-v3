import { CreateClusterInput } from "../shapes/CreateClusterInput";
import { CreateClusterOutput } from "../shapes/CreateClusterOutput";
import { ClusterAlreadyExistsFault } from "../shapes/ClusterAlreadyExistsFault";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { InsufficientClusterCapacityFault } from "../shapes/InsufficientClusterCapacityFault";
import { SubnetGroupNotFoundFault } from "../shapes/SubnetGroupNotFoundFault";
import { InvalidParameterGroupStateFault } from "../shapes/InvalidParameterGroupStateFault";
import { ParameterGroupNotFoundFault } from "../shapes/ParameterGroupNotFoundFault";
import { ClusterQuotaForCustomerExceededFault } from "../shapes/ClusterQuotaForCustomerExceededFault";
import { NodeQuotaForClusterExceededFault } from "../shapes/NodeQuotaForClusterExceededFault";
import { NodeQuotaForCustomerExceededFault } from "../shapes/NodeQuotaForCustomerExceededFault";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { TagQuotaPerResourceExceeded } from "../shapes/TagQuotaPerResourceExceeded";
import { ServiceLinkedRoleNotFoundFault } from "../shapes/ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
