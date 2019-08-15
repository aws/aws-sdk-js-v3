import { GetResolverRuleInput } from "../shapes/GetResolverRuleInput";
import { GetResolverRuleOutput } from "../shapes/GetResolverRuleOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetResolverRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResolverRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetResolverRuleInput
  },
  output: {
    shape: GetResolverRuleOutput
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
