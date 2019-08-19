import { CreateAppInput } from "../shapes/CreateAppInput";
import { CreateAppOutput } from "../shapes/CreateAppOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateApp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateApp",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAppInput
  },
  output: {
    shape: CreateAppOutput
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
