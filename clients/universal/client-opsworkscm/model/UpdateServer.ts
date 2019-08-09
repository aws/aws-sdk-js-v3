import { UpdateServerInput } from "./UpdateServerInput";
import { UpdateServerOutput } from "./UpdateServerOutput";
import { InvalidStateException } from "./InvalidStateException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateServer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateServer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateServerInput
  },
  output: {
    shape: UpdateServerOutput
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
