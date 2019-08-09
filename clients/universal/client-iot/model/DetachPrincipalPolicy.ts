import { DetachPrincipalPolicyInput } from "./DetachPrincipalPolicyInput";
import { DetachPrincipalPolicyOutput } from "./DetachPrincipalPolicyOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetachPrincipalPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachPrincipalPolicy",
  http: {
    method: "DELETE",
    requestUri: "/principal-policies/{policyName}"
  },
  input: {
    shape: DetachPrincipalPolicyInput
  },
  output: {
    shape: DetachPrincipalPolicyOutput
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
