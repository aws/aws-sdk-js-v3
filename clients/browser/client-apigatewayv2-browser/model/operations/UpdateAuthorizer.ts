import { UpdateAuthorizerInput } from "../shapes/UpdateAuthorizerInput";
import { UpdateAuthorizerOutput } from "../shapes/UpdateAuthorizerOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateAuthorizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAuthorizer",
  http: {
    method: "PATCH",
    requestUri: "/v2/apis/{apiId}/authorizers/{authorizerId}"
  },
  input: {
    shape: UpdateAuthorizerInput
  },
  output: {
    shape: UpdateAuthorizerOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    }
  ]
};
