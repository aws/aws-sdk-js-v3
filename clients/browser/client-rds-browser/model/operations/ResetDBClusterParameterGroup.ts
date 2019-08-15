import { ResetDBClusterParameterGroupInput } from "../shapes/ResetDBClusterParameterGroupInput";
import { ResetDBClusterParameterGroupOutput } from "../shapes/ResetDBClusterParameterGroupOutput";
import { InvalidDBParameterGroupStateFault } from "../shapes/InvalidDBParameterGroupStateFault";
import { DBParameterGroupNotFoundFault } from "../shapes/DBParameterGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
