import { UpdateAutoScalingGroupInput } from "../shapes/UpdateAutoScalingGroupInput";
import { UpdateAutoScalingGroupOutput } from "../shapes/UpdateAutoScalingGroupOutput";
import { ScalingActivityInProgressFault } from "../shapes/ScalingActivityInProgressFault";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "../shapes/ServiceLinkedRoleFailure";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
