import { StopInstanceInput } from "./StopInstanceInput";
import { StopInstanceOutput } from "./StopInstanceOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
