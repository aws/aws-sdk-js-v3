import { DeleteServerInput } from "../shapes/DeleteServerInput";
import { DeleteServerOutput } from "../shapes/DeleteServerOutput";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteServer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteServer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteServerInput
  },
  output: {
    shape: DeleteServerOutput
  },
  errors: [
    {
      shape: InvalidStateException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};
