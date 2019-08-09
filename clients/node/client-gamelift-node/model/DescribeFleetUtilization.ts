import { DescribeFleetUtilizationInput } from "./DescribeFleetUtilizationInput";
import { DescribeFleetUtilizationOutput } from "./DescribeFleetUtilizationOutput";
import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
