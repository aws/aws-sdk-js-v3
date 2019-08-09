import { DescribeFleetEventsInput } from "./DescribeFleetEventsInput";
import { DescribeFleetEventsOutput } from "./DescribeFleetEventsOutput";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
