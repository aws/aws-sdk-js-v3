import { DescribeEC2InstanceLimitsInput } from "../shapes/DescribeEC2InstanceLimitsInput";
import { DescribeEC2InstanceLimitsOutput } from "../shapes/DescribeEC2InstanceLimitsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEC2InstanceLimits: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEC2InstanceLimits",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEC2InstanceLimitsInput
  },
  output: {
    shape: DescribeEC2InstanceLimitsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: UnauthorizedException
    }
  ]
};
