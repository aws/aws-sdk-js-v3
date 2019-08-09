import { DeleteScalingPolicyInput } from "./DeleteScalingPolicyInput";
import { DeleteScalingPolicyOutput } from "./DeleteScalingPolicyOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
