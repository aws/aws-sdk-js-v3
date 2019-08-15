import { StartServerInput } from "../shapes/StartServerInput";
import { StartServerOutput } from "../shapes/StartServerOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
