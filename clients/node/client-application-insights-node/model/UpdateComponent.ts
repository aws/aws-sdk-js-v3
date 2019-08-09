import { UpdateComponentInput } from "./UpdateComponentInput";
import { UpdateComponentOutput } from "./UpdateComponentOutput";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
