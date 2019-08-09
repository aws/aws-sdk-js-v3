import { StartServerInput } from "./StartServerInput";
import { StartServerOutput } from "./StartServerOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartServer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartServer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartServerInput
  },
  output: {
    shape: StartServerOutput
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
