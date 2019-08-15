import { StopServerInput } from "../shapes/StopServerInput";
import { StopServerOutput } from "../shapes/StopServerOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopServer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopServer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopServerInput
  },
  output: {
    shape: StopServerOutput
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
