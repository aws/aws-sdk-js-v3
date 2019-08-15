import { ListAuthorizersInput } from "../shapes/ListAuthorizersInput";
import { ListAuthorizersOutput } from "../shapes/ListAuthorizersOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAuthorizers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAuthorizers",
  http: {
    method: "GET",
    requestUri: "/authorizers/"
  },
  input: {
    shape: ListAuthorizersInput
  },
  output: {
    shape: ListAuthorizersOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    }
  ]
};
