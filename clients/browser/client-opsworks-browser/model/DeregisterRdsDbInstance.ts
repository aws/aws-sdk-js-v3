import { DeregisterRdsDbInstanceInput } from "./DeregisterRdsDbInstanceInput";
import { DeregisterRdsDbInstanceOutput } from "./DeregisterRdsDbInstanceOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeregisterRdsDbInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterRdsDbInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterRdsDbInstanceInput
  },
  output: {
    shape: DeregisterRdsDbInstanceOutput
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
