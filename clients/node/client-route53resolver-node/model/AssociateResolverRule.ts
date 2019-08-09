import { AssociateResolverRuleInput } from "./AssociateResolverRuleInput";
import { AssociateResolverRuleOutput } from "./AssociateResolverRuleOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { ResourceExistsException } from "./ResourceExistsException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
