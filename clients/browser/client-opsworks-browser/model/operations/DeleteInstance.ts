import { DeleteInstanceInput } from "../shapes/DeleteInstanceInput";
import { DeleteInstanceOutput } from "../shapes/DeleteInstanceOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteInstanceInput
  },
  output: {
    shape: DeleteInstanceOutput
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
