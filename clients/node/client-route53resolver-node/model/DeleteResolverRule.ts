import { DeleteResolverRuleInput } from "./DeleteResolverRuleInput";
import { DeleteResolverRuleOutput } from "./DeleteResolverRuleOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
