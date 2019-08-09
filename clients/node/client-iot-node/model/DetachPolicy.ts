import { DetachPolicyInput } from "./DetachPolicyInput";
import { DetachPolicyOutput } from "./DetachPolicyOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetachPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachPolicy",
  http: {
    method: "POST",
    requestUri: "/target-policies/{policyName}"
  },
  input: {
    shape: DetachPolicyInput
  },
  output: {
    shape: DetachPolicyOutput
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
    },
    {
      shape: LimitExceededException
    }
  ]
};
