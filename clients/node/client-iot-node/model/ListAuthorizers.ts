import { ListAuthorizersInput } from "./ListAuthorizersInput";
import { ListAuthorizersOutput } from "./ListAuthorizersOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
