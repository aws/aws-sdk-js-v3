import { DeregisterInstanceInput } from "../shapes/DeregisterInstanceInput";
import { DeregisterInstanceOutput } from "../shapes/DeregisterInstanceOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeregisterInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterInstanceInput
  },
  output: {
    shape: DeregisterInstanceOutput
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
