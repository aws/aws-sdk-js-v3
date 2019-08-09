import { UpdateStackInput } from "./UpdateStackInput";
import { UpdateStackOutput } from "./UpdateStackOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
