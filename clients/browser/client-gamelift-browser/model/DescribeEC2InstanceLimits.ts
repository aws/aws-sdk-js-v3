import { DescribeEC2InstanceLimitsInput } from "./DescribeEC2InstanceLimitsInput";
import { DescribeEC2InstanceLimitsOutput } from "./DescribeEC2InstanceLimitsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
