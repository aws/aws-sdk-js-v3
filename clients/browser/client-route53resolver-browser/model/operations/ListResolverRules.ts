import { ListResolverRulesInput } from "../shapes/ListResolverRulesInput";
import { ListResolverRulesOutput } from "../shapes/ListResolverRulesOutput";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListResolverRules: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResolverRules",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListResolverRulesInput
  },
  output: {
    shape: ListResolverRulesOutput
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
