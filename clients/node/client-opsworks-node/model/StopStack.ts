import { StopStackInput } from "./StopStackInput";
import { StopStackOutput } from "./StopStackOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
