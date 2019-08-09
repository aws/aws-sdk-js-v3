import { UpdateResolverRuleInput } from "./UpdateResolverRuleInput";
import { UpdateResolverRuleOutput } from "./UpdateResolverRuleOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateResolverRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateResolverRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateResolverRuleInput
  },
  output: {
    shape: UpdateResolverRuleOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceUnavailableException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: ThrottlingException
    }
  ]
};
