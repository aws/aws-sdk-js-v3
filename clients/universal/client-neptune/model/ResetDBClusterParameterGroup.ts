import { ResetDBClusterParameterGroupInput } from "./ResetDBClusterParameterGroupInput";
import { ResetDBClusterParameterGroupOutput } from "./ResetDBClusterParameterGroupOutput";
import { InvalidDBParameterGroupStateFault } from "./InvalidDBParameterGroupStateFault";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ResetDBClusterParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResetDBClusterParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResetDBClusterParameterGroupInput
  },
  output: {
    shape: ResetDBClusterParameterGroupOutput,
    resultWrapper: "ResetDBClusterParameterGroupResult"
  },
  errors: [
    {
      shape: InvalidDBParameterGroupStateFault
    },
    {
      shape: DBParameterGroupNotFoundFault
    }
  ]
};
