import { DeleteAuthorizerInput } from "./DeleteAuthorizerInput";
import { DeleteAuthorizerOutput } from "./DeleteAuthorizerOutput";
import { DeleteConflictException } from "./DeleteConflictException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAuthorizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAuthorizer",
  http: {
    method: "DELETE",
    requestUri: "/authorizer/{authorizerName}"
  },
  input: {
    shape: DeleteAuthorizerInput
  },
  output: {
    shape: DeleteAuthorizerOutput
  },
  errors: [
    {
      shape: DeleteConflictException
    },
    {
      shape: ResourceNotFoundException
    },
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
