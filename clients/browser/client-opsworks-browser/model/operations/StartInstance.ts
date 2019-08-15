import { StartInstanceInput } from "../shapes/StartInstanceInput";
import { StartInstanceOutput } from "../shapes/StartInstanceOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartInstanceInput
  },
  output: {
    shape: StartInstanceOutput
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
