import { CreateUserPoolDomainInput } from "./CreateUserPoolDomainInput";
import { CreateUserPoolDomainOutput } from "./CreateUserPoolDomainOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateUserPoolDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateUserPoolDomain",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateUserPoolDomainInput
  },
  output: {
    shape: CreateUserPoolDomainOutput
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
      shape: LimitExceededException
    },
    {
      shape: InternalErrorException
    }
  ]
};
