import { CreateAuthorizerInput } from "../shapes/CreateAuthorizerInput";
import { CreateAuthorizerOutput } from "../shapes/CreateAuthorizerOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateAuthorizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAuthorizer",
  http: {
    method: "POST",
    requestUri: "/v2/apis/{apiId}/authorizers"
  },
  input: {
    shape: CreateAuthorizerInput
  },
  output: {
    shape: CreateAuthorizerOutput
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
