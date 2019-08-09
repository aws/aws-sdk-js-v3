import { CreateResolverRuleInput } from "./CreateResolverRuleInput";
import { CreateResolverRuleOutput } from "./CreateResolverRuleOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceExistsException } from "./ResourceExistsException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateResolverRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateResolverRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateResolverRuleInput
  },
  output: {
    shape: CreateResolverRuleOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceExistsException
    },
    {
      shape: ResourceUnavailableException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: ThrottlingException
    }
  ]
};
