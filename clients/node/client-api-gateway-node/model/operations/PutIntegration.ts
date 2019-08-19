import { PutIntegrationInput } from "../shapes/PutIntegrationInput";
import { PutIntegrationOutput } from "../shapes/PutIntegrationOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutIntegration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutIntegration",
  http: {
    method: "PUT",
    requestUri:
      "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration"
  },
  input: {
    shape: PutIntegrationInput
  },
  output: {
    shape: PutIntegrationOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
