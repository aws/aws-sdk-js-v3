import { DescribeFleetCapacityInput } from "./DescribeFleetCapacityInput";
import { DescribeFleetCapacityOutput } from "./DescribeFleetCapacityOutput";
import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
