import { UpdateAuthorizerInput } from "./UpdateAuthorizerInput";
import { UpdateAuthorizerOutput } from "./UpdateAuthorizerOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
