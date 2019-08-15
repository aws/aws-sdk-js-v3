import { UpdateAuthorizerInput } from "../shapes/UpdateAuthorizerInput";
import { UpdateAuthorizerOutput } from "../shapes/UpdateAuthorizerOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateAuthorizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAuthorizer",
  http: {
    method: "PATCH",
    requestUri: "/restapis/{restapi_id}/authorizers/{authorizer_id}"
  },
  input: {
    shape: UpdateAuthorizerInput
  },
  output: {
    shape: UpdateAuthorizerOutput
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
    }
  ]
};
