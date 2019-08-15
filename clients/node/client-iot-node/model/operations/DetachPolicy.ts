import { DetachPolicyInput } from "../shapes/DetachPolicyInput";
import { DetachPolicyOutput } from "../shapes/DetachPolicyOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
