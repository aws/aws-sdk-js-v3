import { DeleteServerInput } from "./DeleteServerInput";
import { DeleteServerOutput } from "./DeleteServerOutput";
import { InvalidStateException } from "./InvalidStateException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
