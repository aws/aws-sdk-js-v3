import { GetResolverRuleAssociationInput } from "../shapes/GetResolverRuleAssociationInput";
import { GetResolverRuleAssociationOutput } from "../shapes/GetResolverRuleAssociationOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
