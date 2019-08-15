import { PutResolverRulePolicyInput } from "../shapes/PutResolverRulePolicyInput";
import { PutResolverRulePolicyOutput } from "../shapes/PutResolverRulePolicyOutput";
import { InvalidPolicyDocument } from "../shapes/InvalidPolicyDocument";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { UnknownResourceException } from "../shapes/UnknownResourceException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutResolverRulePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutResolverRulePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutResolverRulePolicyInput
  },
  output: {
    shape: PutResolverRulePolicyOutput
  },
  errors: [
    {
      shape: InvalidPolicyDocument
    },
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
