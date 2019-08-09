import { AssignInstanceInput } from "./AssignInstanceInput";
import { AssignInstanceOutput } from "./AssignInstanceOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
