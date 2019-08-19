import { DeleteAuthorizerInput } from "../shapes/DeleteAuthorizerInput";
import { DeleteAuthorizerOutput } from "../shapes/DeleteAuthorizerOutput";
import { DeleteConflictException } from "../shapes/DeleteConflictException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
