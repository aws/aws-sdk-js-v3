import { ListPrincipalPoliciesInput } from "../shapes/ListPrincipalPoliciesInput";
import { ListPrincipalPoliciesOutput } from "../shapes/ListPrincipalPoliciesOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPrincipalPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPrincipalPolicies",
  http: {
    method: "GET",
    requestUri: "/principal-policies"
  },
  input: {
    shape: ListPrincipalPoliciesInput
  },
  output: {
    shape: ListPrincipalPoliciesOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
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
