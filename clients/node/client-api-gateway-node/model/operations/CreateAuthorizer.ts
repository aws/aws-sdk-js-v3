import { CreateAuthorizerInput } from "../shapes/CreateAuthorizerInput";
import { CreateAuthorizerOutput } from "../shapes/CreateAuthorizerOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateAuthorizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAuthorizer",
  http: {
    method: "POST",
    requestUri: "/restapis/{restapi_id}/authorizers"
  },
  input: {
    shape: CreateAuthorizerInput
  },
  output: {
    shape: CreateAuthorizerOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
