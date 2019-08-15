import { DeleteScalingPolicyInput } from "../shapes/DeleteScalingPolicyInput";
import { DeleteScalingPolicyOutput } from "../shapes/DeleteScalingPolicyOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteScalingPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteScalingPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteScalingPolicyInput
  },
  output: {
    shape: DeleteScalingPolicyOutput
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
