import { UpdateComponentInput } from "../shapes/UpdateComponentInput";
import { UpdateComponentOutput } from "../shapes/UpdateComponentOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateComponent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateComponent",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateComponentInput
  },
  output: {
    shape: UpdateComponentOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
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
