import { StopStackInput } from "../shapes/StopStackInput";
import { StopStackOutput } from "../shapes/StopStackOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopStack: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopStack",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopStackInput
  },
  output: {
    shape: StopStackOutput
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
