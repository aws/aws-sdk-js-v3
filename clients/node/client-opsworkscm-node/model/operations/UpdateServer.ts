import { UpdateServerInput } from "../shapes/UpdateServerInput";
import { UpdateServerOutput } from "../shapes/UpdateServerOutput";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
