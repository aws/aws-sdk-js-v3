import { DeregisterInstanceInput } from "./DeregisterInstanceInput";
import { DeregisterInstanceOutput } from "./DeregisterInstanceOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
