import { CreateApplicationInput } from "../shapes/CreateApplicationInput";
import { CreateApplicationOutput } from "../shapes/CreateApplicationOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateApplicationInput
  },
  output: {
    shape: CreateApplicationOutput
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
