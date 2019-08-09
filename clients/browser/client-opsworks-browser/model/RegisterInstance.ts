import { RegisterInstanceInput } from "./RegisterInstanceInput";
import { RegisterInstanceOutput } from "./RegisterInstanceOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterInstanceInput
  },
  output: {
    shape: RegisterInstanceOutput
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
