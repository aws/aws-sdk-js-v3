import { CreateInstanceInput } from "../shapes/CreateInstanceInput";
import { CreateInstanceOutput } from "../shapes/CreateInstanceOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateInstanceInput
  },
  output: {
    shape: CreateInstanceOutput
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
