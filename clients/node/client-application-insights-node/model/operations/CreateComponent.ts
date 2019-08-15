import { CreateComponentInput } from "../shapes/CreateComponentInput";
import { CreateComponentOutput } from "../shapes/CreateComponentOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateComponent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateComponent",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateComponentInput
  },
  output: {
    shape: CreateComponentOutput
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
