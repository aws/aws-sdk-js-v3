import { ListResolverRulesInput } from "./ListResolverRulesInput";
import { ListResolverRulesOutput } from "./ListResolverRulesOutput";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
