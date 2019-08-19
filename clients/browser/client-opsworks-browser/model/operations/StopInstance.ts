import { StopInstanceInput } from "../shapes/StopInstanceInput";
import { StopInstanceOutput } from "../shapes/StopInstanceOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopInstanceInput
  },
  output: {
    shape: StopInstanceOutput
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
