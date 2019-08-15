import { GetIntegrationInput } from "../shapes/GetIntegrationInput";
import { GetIntegrationOutput } from "../shapes/GetIntegrationOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetIntegration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIntegration",
  http: {
    method: "GET",
    requestUri:
      "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration"
  },
  input: {
    shape: GetIntegrationInput
  },
  output: {
    shape: GetIntegrationOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
