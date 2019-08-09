import { DeleteAuthorizerInput } from "./DeleteAuthorizerInput";
import { DeleteAuthorizerOutput } from "./DeleteAuthorizerOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAuthorizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAuthorizer",
  http: {
    method: "DELETE",
    requestUri: "/restapis/{restapi_id}/authorizers/{authorizer_id}"
  },
  input: {
    shape: DeleteAuthorizerInput
  },
  output: {
    shape: DeleteAuthorizerOutput
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
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    }
  ]
};
