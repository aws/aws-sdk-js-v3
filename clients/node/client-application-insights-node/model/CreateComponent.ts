import { CreateComponentInput } from "./CreateComponentInput";
import { CreateComponentOutput } from "./CreateComponentOutput";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
