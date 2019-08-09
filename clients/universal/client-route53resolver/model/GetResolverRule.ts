import { GetResolverRuleInput } from "./GetResolverRuleInput";
import { GetResolverRuleOutput } from "./GetResolverRuleOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetResolverRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResolverRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetResolverRuleInput
  },
  output: {
    shape: GetResolverRuleOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: ThrottlingException
    }
  ]
};
