import { StopServerInput } from "./StopServerInput";
import { StopServerOutput } from "./StopServerOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
