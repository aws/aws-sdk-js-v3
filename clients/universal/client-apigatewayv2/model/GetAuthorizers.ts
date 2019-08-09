import { GetAuthorizersInput } from "./GetAuthorizersInput";
import { GetAuthorizersOutput } from "./GetAuthorizersOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
