import { ListPolicyPrincipalsInput } from "./ListPolicyPrincipalsInput";
import { ListPolicyPrincipalsOutput } from "./ListPolicyPrincipalsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
