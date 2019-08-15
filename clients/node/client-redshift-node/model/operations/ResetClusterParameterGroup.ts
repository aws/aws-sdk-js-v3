import { ResetClusterParameterGroupInput } from "../shapes/ResetClusterParameterGroupInput";
import { ResetClusterParameterGroupOutput } from "../shapes/ResetClusterParameterGroupOutput";
import { InvalidClusterParameterGroupStateFault } from "../shapes/InvalidClusterParameterGroupStateFault";
import { ClusterParameterGroupNotFoundFault } from "../shapes/ClusterParameterGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ResetClusterParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResetClusterParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResetClusterParameterGroupInput
  },
  output: {
    shape: ResetClusterParameterGroupOutput,
    resultWrapper: "ResetClusterParameterGroupResult"
  },
  errors: [
    {
      shape: InvalidClusterParameterGroupStateFault
    },
    {
      shape: ClusterParameterGroupNotFoundFault
    }
  ]
};
