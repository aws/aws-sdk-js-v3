import { DeleteComponentInput } from "./DeleteComponentInput";
import { DeleteComponentOutput } from "./DeleteComponentOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteComponent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteComponent",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteComponentInput
  },
  output: {
    shape: DeleteComponentOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    },
    {
      shape: InternalServerException
    }
  ]
};
