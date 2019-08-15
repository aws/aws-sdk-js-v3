import { DescribeFleetUtilizationInput } from "../shapes/DescribeFleetUtilizationInput";
import { DescribeFleetUtilizationOutput } from "../shapes/DescribeFleetUtilizationOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeFleetUtilization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFleetUtilization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeFleetUtilizationInput
  },
  output: {
    shape: DescribeFleetUtilizationOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: UnauthorizedException
    }
  ]
};
