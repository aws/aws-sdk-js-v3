import { GetResolverRulePolicyInput } from "./GetResolverRulePolicyInput";
import { GetResolverRulePolicyOutput } from "./GetResolverRulePolicyOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnknownResourceException } from "./UnknownResourceException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetResolverRulePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResolverRulePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetResolverRulePolicyInput
  },
  output: {
    shape: GetResolverRulePolicyOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: UnknownResourceException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
