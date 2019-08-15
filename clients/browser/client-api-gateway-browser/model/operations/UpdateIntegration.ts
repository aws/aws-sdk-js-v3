import { UpdateIntegrationInput } from "../shapes/UpdateIntegrationInput";
import { UpdateIntegrationOutput } from "../shapes/UpdateIntegrationOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateIntegration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateIntegration",
  http: {
    method: "PATCH",
    requestUri:
      "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration"
  },
  input: {
    shape: UpdateIntegrationInput
  },
  output: {
    shape: UpdateIntegrationOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ConflictException
    }
  ]
};
