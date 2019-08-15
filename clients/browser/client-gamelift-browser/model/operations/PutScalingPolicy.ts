import { PutScalingPolicyInput } from "../shapes/PutScalingPolicyInput";
import { PutScalingPolicyOutput } from "../shapes/PutScalingPolicyOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutScalingPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutScalingPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutScalingPolicyInput
  },
  output: {
    shape: PutScalingPolicyOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    }
  ]
};
