import { UpdateServerInput } from "./UpdateServerInput";
import { UpdateServerOutput } from "./UpdateServerOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
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
      shape: ServiceUnavailableException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
