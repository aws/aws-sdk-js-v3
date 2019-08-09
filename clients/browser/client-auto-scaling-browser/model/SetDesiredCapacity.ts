import { SetDesiredCapacityInput } from "./SetDesiredCapacityInput";
import { SetDesiredCapacityOutput } from "./SetDesiredCapacityOutput";
import { ScalingActivityInProgressFault } from "./ScalingActivityInProgressFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
