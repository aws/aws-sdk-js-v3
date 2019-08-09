import { CreateInstanceInput } from "./CreateInstanceInput";
import { CreateInstanceOutput } from "./CreateInstanceOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
