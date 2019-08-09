import { CreateApplicationInput } from "./CreateApplicationInput";
import { CreateApplicationOutput } from "./CreateApplicationOutput";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
