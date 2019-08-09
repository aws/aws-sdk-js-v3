import { ListResolverRuleAssociationsInput } from "./ListResolverRuleAssociationsInput";
import { ListResolverRuleAssociationsOutput } from "./ListResolverRuleAssociationsOutput";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
