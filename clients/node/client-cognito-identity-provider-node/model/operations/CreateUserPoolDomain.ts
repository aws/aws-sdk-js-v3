import { CreateUserPoolDomainInput } from "../shapes/CreateUserPoolDomainInput";
import { CreateUserPoolDomainOutput } from "../shapes/CreateUserPoolDomainOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
