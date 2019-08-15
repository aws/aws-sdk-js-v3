import { UpdateResolverRuleInput } from "../shapes/UpdateResolverRuleInput";
import { UpdateResolverRuleOutput } from "../shapes/UpdateResolverRuleOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
