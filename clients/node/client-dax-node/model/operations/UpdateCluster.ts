import { UpdateClusterInput } from "../shapes/UpdateClusterInput";
import { UpdateClusterOutput } from "../shapes/UpdateClusterOutput";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { InvalidParameterGroupStateFault } from "../shapes/InvalidParameterGroupStateFault";
import { ParameterGroupNotFoundFault } from "../shapes/ParameterGroupNotFoundFault";
import { ServiceLinkedRoleNotFoundFault } from "../shapes/ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateClusterInput
  },
  output: {
    shape: UpdateClusterOutput
  },
  errors: [
    {
      shape: InvalidClusterStateFault
    },
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: InvalidParameterGroupStateFault
    },
    {
      shape: ParameterGroupNotFoundFault
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
