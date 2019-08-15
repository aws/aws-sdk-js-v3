import { DescribeFleetEventsInput } from "../shapes/DescribeFleetEventsInput";
import { DescribeFleetEventsOutput } from "../shapes/DescribeFleetEventsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeFleetEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFleetEvents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeFleetEventsInput
  },
  output: {
    shape: DescribeFleetEventsOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
