import { UpdateUserPoolDomainInput } from "./UpdateUserPoolDomainInput";
import { UpdateUserPoolDomainOutput } from "./UpdateUserPoolDomainOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
