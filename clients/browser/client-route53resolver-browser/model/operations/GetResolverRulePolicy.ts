import { GetResolverRulePolicyInput } from "../shapes/GetResolverRulePolicyInput";
import { GetResolverRulePolicyOutput } from "../shapes/GetResolverRulePolicyOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { UnknownResourceException } from "../shapes/UnknownResourceException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
