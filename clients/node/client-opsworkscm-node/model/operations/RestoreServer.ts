import { RestoreServerInput } from "../shapes/RestoreServerInput";
import { RestoreServerOutput } from "../shapes/RestoreServerOutput";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RestoreServer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestoreServer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RestoreServerInput
  },
  output: {
    shape: RestoreServerOutput
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
