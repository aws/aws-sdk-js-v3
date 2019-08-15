import { DescribeGameSessionQueuesInput } from "../shapes/DescribeGameSessionQueuesInput";
import { DescribeGameSessionQueuesOutput } from "../shapes/DescribeGameSessionQueuesOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeGameSessionQueues: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeGameSessionQueues",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeGameSessionQueuesInput
  },
  output: {
    shape: DescribeGameSessionQueuesOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: UnauthorizedException
    }
  ]
};
