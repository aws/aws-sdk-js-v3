import { UpdateInstanceInput } from "./UpdateInstanceInput";
import { UpdateInstanceOutput } from "./UpdateInstanceOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateInstanceInput
  },
  output: {
    shape: UpdateInstanceOutput
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
