import { GetAuthorizerInput } from "../shapes/GetAuthorizerInput";
import { GetAuthorizerOutput } from "../shapes/GetAuthorizerOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAuthorizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAuthorizer",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/authorizers/{authorizer_id}"
  },
  input: {
    shape: GetAuthorizerInput
  },
  output: {
    shape: GetAuthorizerOutput
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
    }
  ]
};
