import { PutResolverRulePolicyInput } from "./PutResolverRulePolicyInput";
import { PutResolverRulePolicyOutput } from "./PutResolverRulePolicyOutput";
import { InvalidPolicyDocument } from "./InvalidPolicyDocument";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnknownResourceException } from "./UnknownResourceException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
