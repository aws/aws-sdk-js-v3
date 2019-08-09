import { ExecutePolicyInput } from "./ExecutePolicyInput";
import { ExecutePolicyOutput } from "./ExecutePolicyOutput";
import { ScalingActivityInProgressFault } from "./ScalingActivityInProgressFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
