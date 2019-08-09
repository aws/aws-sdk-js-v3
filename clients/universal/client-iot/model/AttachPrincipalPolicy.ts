import { AttachPrincipalPolicyInput } from "./AttachPrincipalPolicyInput";
import { AttachPrincipalPolicyOutput } from "./AttachPrincipalPolicyOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
