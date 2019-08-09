import { GetAuthorizersInput } from "./GetAuthorizersInput";
import { GetAuthorizersOutput } from "./GetAuthorizersOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetAuthorizers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAuthorizers",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/authorizers"
  },
  input: {
    shape: GetAuthorizersInput
  },
  output: {
    shape: GetAuthorizersOutput
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
      shape: TooManyRequestsException
    }
  ]
};
