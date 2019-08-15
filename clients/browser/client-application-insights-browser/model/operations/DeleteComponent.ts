import { DeleteComponentInput } from "../shapes/DeleteComponentInput";
import { DeleteComponentOutput } from "../shapes/DeleteComponentOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
