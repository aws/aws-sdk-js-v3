import { DescribeFleetCapacityInput } from "../shapes/DescribeFleetCapacityInput";
import { DescribeFleetCapacityOutput } from "../shapes/DescribeFleetCapacityOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeFleetCapacity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFleetCapacity",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeFleetCapacityInput
  },
  output: {
    shape: DescribeFleetCapacityOutput
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
