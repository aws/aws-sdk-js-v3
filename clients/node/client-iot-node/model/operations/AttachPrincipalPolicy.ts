import { AttachPrincipalPolicyInput } from "../shapes/AttachPrincipalPolicyInput";
import { AttachPrincipalPolicyOutput } from "../shapes/AttachPrincipalPolicyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AttachPrincipalPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachPrincipalPolicy",
  http: {
    method: "PUT",
    requestUri: "/principal-policies/{policyName}"
  },
  input: {
    shape: AttachPrincipalPolicyInput
  },
  output: {
    shape: AttachPrincipalPolicyOutput
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
    },
    {
      shape: LimitExceededException
    }
  ]
};
