import { AssociateResolverRuleInput } from "../shapes/AssociateResolverRuleInput";
import { AssociateResolverRuleOutput } from "../shapes/AssociateResolverRuleOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { ResourceExistsException } from "../shapes/ResourceExistsException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateResolverRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateResolverRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateResolverRuleInput
  },
  output: {
    shape: AssociateResolverRuleOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceUnavailableException
    },
    {
      shape: ResourceExistsException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: ThrottlingException
    }
  ]
};
