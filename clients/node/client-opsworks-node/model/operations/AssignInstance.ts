import { AssignInstanceInput } from "../shapes/AssignInstanceInput";
import { AssignInstanceOutput } from "../shapes/AssignInstanceOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssignInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssignInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssignInstanceInput
  },
  output: {
    shape: AssignInstanceOutput
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
