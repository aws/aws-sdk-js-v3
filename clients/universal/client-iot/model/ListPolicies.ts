import { ListPoliciesInput } from "./ListPoliciesInput";
import { ListPoliciesOutput } from "./ListPoliciesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPolicies",
  http: {
    method: "GET",
    requestUri: "/policies"
  },
  input: {
    shape: ListPoliciesInput
  },
  output: {
    shape: ListPoliciesOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    }
  ]
};
