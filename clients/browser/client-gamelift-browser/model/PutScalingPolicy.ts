import { PutScalingPolicyInput } from "./PutScalingPolicyInput";
import { PutScalingPolicyOutput } from "./PutScalingPolicyOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
