import { GetAuthorizersInput } from "../shapes/GetAuthorizersInput";
import { GetAuthorizersOutput } from "../shapes/GetAuthorizersOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAuthorizers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAuthorizers",
  http: {
    method: "GET",
    requestUri: "/v2/apis/{apiId}/authorizers"
  },
  input: {
    shape: GetAuthorizersInput
  },
  output: {
    shape: GetAuthorizersOutput
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
    }
  ]
};
