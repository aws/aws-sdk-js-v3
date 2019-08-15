import { UpdateServerInput } from "../shapes/UpdateServerInput";
import { UpdateServerOutput } from "../shapes/UpdateServerOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
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
