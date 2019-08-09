import { RegisterRdsDbInstanceInput } from "./RegisterRdsDbInstanceInput";
import { RegisterRdsDbInstanceOutput } from "./RegisterRdsDbInstanceOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterRdsDbInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterRdsDbInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterRdsDbInstanceInput
  },
  output: {
    shape: RegisterRdsDbInstanceOutput
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
