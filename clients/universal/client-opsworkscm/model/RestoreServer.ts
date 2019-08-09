import { RestoreServerInput } from "./RestoreServerInput";
import { RestoreServerOutput } from "./RestoreServerOutput";
import { InvalidStateException } from "./InvalidStateException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
