import { CreateResolverRuleInput } from "../shapes/CreateResolverRuleInput";
import { CreateResolverRuleOutput } from "../shapes/CreateResolverRuleOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceExistsException } from "../shapes/ResourceExistsException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
