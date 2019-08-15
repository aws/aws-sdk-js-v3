import { SetDesiredCapacityInput } from "../shapes/SetDesiredCapacityInput";
import { SetDesiredCapacityOutput } from "../shapes/SetDesiredCapacityOutput";
import { ScalingActivityInProgressFault } from "../shapes/ScalingActivityInProgressFault";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetDesiredCapacity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetDesiredCapacity",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetDesiredCapacityInput
  },
  output: {
    shape: SetDesiredCapacityOutput
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
