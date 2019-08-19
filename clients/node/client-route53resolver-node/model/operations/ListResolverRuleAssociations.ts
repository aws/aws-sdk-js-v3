import { ListResolverRuleAssociationsInput } from "../shapes/ListResolverRuleAssociationsInput";
import { ListResolverRuleAssociationsOutput } from "../shapes/ListResolverRuleAssociationsOutput";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListResolverRuleAssociations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResolverRuleAssociations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListResolverRuleAssociationsInput
  },
  output: {
    shape: ListResolverRuleAssociationsOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InvalidRequestException
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
