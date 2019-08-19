import { DeleteResolverRuleInput } from "../shapes/DeleteResolverRuleInput";
import { DeleteResolverRuleOutput } from "../shapes/DeleteResolverRuleOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteResolverRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteResolverRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteResolverRuleInput
  },
  output: {
    shape: DeleteResolverRuleOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: ThrottlingException
    }
  ]
};
