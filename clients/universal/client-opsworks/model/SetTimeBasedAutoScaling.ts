import { SetTimeBasedAutoScalingInput } from "./SetTimeBasedAutoScalingInput";
import { SetTimeBasedAutoScalingOutput } from "./SetTimeBasedAutoScalingOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SetTimeBasedAutoScaling: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetTimeBasedAutoScaling",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetTimeBasedAutoScalingInput
  },
  output: {
    shape: SetTimeBasedAutoScalingOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
