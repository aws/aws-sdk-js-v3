import { UpdateStackInput } from "../shapes/UpdateStackInput";
import { UpdateStackOutput } from "../shapes/UpdateStackOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateStack: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateStack",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateStackInput
  },
  output: {
    shape: UpdateStackOutput
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
