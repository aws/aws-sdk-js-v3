import { TerminateInstanceInAutoScalingGroupInput } from "../shapes/TerminateInstanceInAutoScalingGroupInput";
import { TerminateInstanceInAutoScalingGroupOutput } from "../shapes/TerminateInstanceInAutoScalingGroupOutput";
import { ScalingActivityInProgressFault } from "../shapes/ScalingActivityInProgressFault";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TerminateInstanceInAutoScalingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TerminateInstanceInAutoScalingGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TerminateInstanceInAutoScalingGroupInput
  },
  output: {
    shape: TerminateInstanceInAutoScalingGroupOutput,
    resultWrapper: "TerminateInstanceInAutoScalingGroupResult"
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
