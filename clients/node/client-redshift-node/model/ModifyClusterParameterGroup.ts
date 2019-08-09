import { ModifyClusterParameterGroupInput } from "./ModifyClusterParameterGroupInput";
import { ModifyClusterParameterGroupOutput } from "./ModifyClusterParameterGroupOutput";
import { ClusterParameterGroupNotFoundFault } from "./ClusterParameterGroupNotFoundFault";
import { InvalidClusterParameterGroupStateFault } from "./InvalidClusterParameterGroupStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyClusterParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyClusterParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyClusterParameterGroupInput
  },
  output: {
    shape: ModifyClusterParameterGroupOutput,
    resultWrapper: "ModifyClusterParameterGroupResult"
  },
  errors: [
    {
      shape: ClusterParameterGroupNotFoundFault
    },
    {
      shape: InvalidClusterParameterGroupStateFault
    }
  ]
};
