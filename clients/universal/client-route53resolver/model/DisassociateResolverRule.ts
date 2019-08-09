import { DisassociateResolverRuleInput } from "./DisassociateResolverRuleInput";
import { DisassociateResolverRuleOutput } from "./DisassociateResolverRuleOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateResolverRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateResolverRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateResolverRuleInput
  },
  output: {
    shape: DisassociateResolverRuleOutput
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
