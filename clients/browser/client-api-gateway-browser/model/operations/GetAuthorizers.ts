import { GetAuthorizersInput } from "../shapes/GetAuthorizersInput";
import { GetAuthorizersOutput } from "../shapes/GetAuthorizersOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
