import { UpdateAutoScalingGroupInput } from "./UpdateAutoScalingGroupInput";
import { UpdateAutoScalingGroupOutput } from "./UpdateAutoScalingGroupOutput";
import { ScalingActivityInProgressFault } from "./ScalingActivityInProgressFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "./ServiceLinkedRoleFailure";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateAutoScalingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAutoScalingGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAutoScalingGroupInput
  },
  output: {
    shape: UpdateAutoScalingGroupOutput
  },
  errors: [
    {
      shape: ScalingActivityInProgressFault
    },
    {
      shape: ResourceContentionFault
    },
    {
      shape: ServiceLinkedRoleFailure
    }
  ]
};
