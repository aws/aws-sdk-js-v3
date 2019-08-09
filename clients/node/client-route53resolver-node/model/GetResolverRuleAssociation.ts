import { GetResolverRuleAssociationInput } from "./GetResolverRuleAssociationInput";
import { GetResolverRuleAssociationOutput } from "./GetResolverRuleAssociationOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetResolverRuleAssociation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResolverRuleAssociation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetResolverRuleAssociationInput
  },
  output: {
    shape: GetResolverRuleAssociationOutput
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
