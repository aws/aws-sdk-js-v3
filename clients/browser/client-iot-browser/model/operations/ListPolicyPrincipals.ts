import { ListPolicyPrincipalsInput } from "../shapes/ListPolicyPrincipalsInput";
import { ListPolicyPrincipalsOutput } from "../shapes/ListPolicyPrincipalsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPolicyPrincipals: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPolicyPrincipals",
  http: {
    method: "GET",
    requestUri: "/policy-principals"
  },
  input: {
    shape: ListPolicyPrincipalsInput
  },
  output: {
    shape: ListPolicyPrincipalsOutput
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
