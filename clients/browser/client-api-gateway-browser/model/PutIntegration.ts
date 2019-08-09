import { PutIntegrationInput } from "./PutIntegrationInput";
import { PutIntegrationOutput } from "./PutIntegrationOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
