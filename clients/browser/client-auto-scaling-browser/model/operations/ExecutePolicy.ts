import { ExecutePolicyInput } from "../shapes/ExecutePolicyInput";
import { ExecutePolicyOutput } from "../shapes/ExecutePolicyOutput";
import { ScalingActivityInProgressFault } from "../shapes/ScalingActivityInProgressFault";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ExecutePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ExecutePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ExecutePolicyInput
  },
  output: {
    shape: ExecutePolicyOutput
  },
  errors: [
    {
      shape: ScalingActivityInProgressFault
    },
    {
      shape: ResourceContentionFault
    }
  ]
};
