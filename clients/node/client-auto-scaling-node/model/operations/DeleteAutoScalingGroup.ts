import { DeleteAutoScalingGroupInput } from "../shapes/DeleteAutoScalingGroupInput";
import { DeleteAutoScalingGroupOutput } from "../shapes/DeleteAutoScalingGroupOutput";
import { ScalingActivityInProgressFault } from "../shapes/ScalingActivityInProgressFault";
import { ResourceInUseFault } from "../shapes/ResourceInUseFault";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
