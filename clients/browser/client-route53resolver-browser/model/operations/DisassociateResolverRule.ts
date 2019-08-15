import { DisassociateResolverRuleInput } from "../shapes/DisassociateResolverRuleInput";
import { DisassociateResolverRuleOutput } from "../shapes/DisassociateResolverRuleOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
