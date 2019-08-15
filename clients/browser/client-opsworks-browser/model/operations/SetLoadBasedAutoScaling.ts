import { SetLoadBasedAutoScalingInput } from "../shapes/SetLoadBasedAutoScalingInput";
import { SetLoadBasedAutoScalingOutput } from "../shapes/SetLoadBasedAutoScalingOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetLoadBasedAutoScaling: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetLoadBasedAutoScaling",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetLoadBasedAutoScalingInput
  },
  output: {
    shape: SetLoadBasedAutoScalingOutput
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
