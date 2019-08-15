import { CloneStackInput } from "../shapes/CloneStackInput";
import { CloneStackOutput } from "../shapes/CloneStackOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CloneStack: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CloneStack",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CloneStackInput
  },
  output: {
    shape: CloneStackOutput
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
