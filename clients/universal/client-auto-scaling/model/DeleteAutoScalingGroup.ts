import { DeleteAutoScalingGroupInput } from "./DeleteAutoScalingGroupInput";
import { DeleteAutoScalingGroupOutput } from "./DeleteAutoScalingGroupOutput";
import { ScalingActivityInProgressFault } from "./ScalingActivityInProgressFault";
import { ResourceInUseFault } from "./ResourceInUseFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAutoScalingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAutoScalingGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAutoScalingGroupInput
  },
  output: {
    shape: DeleteAutoScalingGroupOutput
  },
  errors: [
    {
      shape: ScalingActivityInProgressFault
    },
    {
      shape: ResourceInUseFault
    },
    {
      shape: ResourceContentionFault
    }
  ]
};
