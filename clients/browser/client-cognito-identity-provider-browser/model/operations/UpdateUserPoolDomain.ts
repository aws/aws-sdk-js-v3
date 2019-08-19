import { UpdateUserPoolDomainInput } from "../shapes/UpdateUserPoolDomainInput";
import { UpdateUserPoolDomainOutput } from "../shapes/UpdateUserPoolDomainOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateUserPoolDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUserPoolDomain",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateUserPoolDomainInput
  },
  output: {
    shape: UpdateUserPoolDomainOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalErrorException
    }
  ]
};
