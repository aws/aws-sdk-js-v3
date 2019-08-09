import { CreateAuthorizerInput } from "./CreateAuthorizerInput";
import { CreateAuthorizerOutput } from "./CreateAuthorizerOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
