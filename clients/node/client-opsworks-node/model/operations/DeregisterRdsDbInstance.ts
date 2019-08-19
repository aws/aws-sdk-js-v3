import { DeregisterRdsDbInstanceInput } from "../shapes/DeregisterRdsDbInstanceInput";
import { DeregisterRdsDbInstanceOutput } from "../shapes/DeregisterRdsDbInstanceOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
