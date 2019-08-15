import { RegisterRdsDbInstanceInput } from "../shapes/RegisterRdsDbInstanceInput";
import { RegisterRdsDbInstanceOutput } from "../shapes/RegisterRdsDbInstanceOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
