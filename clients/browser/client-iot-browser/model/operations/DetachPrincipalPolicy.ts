import { DetachPrincipalPolicyInput } from "../shapes/DetachPrincipalPolicyInput";
import { DetachPrincipalPolicyOutput } from "../shapes/DetachPrincipalPolicyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
