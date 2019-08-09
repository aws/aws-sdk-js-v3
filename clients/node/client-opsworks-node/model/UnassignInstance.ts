import { UnassignInstanceInput } from "./UnassignInstanceInput";
import { UnassignInstanceOutput } from "./UnassignInstanceOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UnassignInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UnassignInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UnassignInstanceInput
  },
  output: {
    shape: UnassignInstanceOutput
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
