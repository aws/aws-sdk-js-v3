import { ResetClusterParameterGroupInput } from "./ResetClusterParameterGroupInput";
import { ResetClusterParameterGroupOutput } from "./ResetClusterParameterGroupOutput";
import { InvalidClusterParameterGroupStateFault } from "./InvalidClusterParameterGroupStateFault";
import { ClusterParameterGroupNotFoundFault } from "./ClusterParameterGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
