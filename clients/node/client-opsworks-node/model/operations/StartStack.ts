import { StartStackInput } from "../shapes/StartStackInput";
import { StartStackOutput } from "../shapes/StartStackOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartStack: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartStack",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartStackInput
  },
  output: {
    shape: StartStackOutput
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
