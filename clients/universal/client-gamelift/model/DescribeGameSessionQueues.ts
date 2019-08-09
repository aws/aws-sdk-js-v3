import { DescribeGameSessionQueuesInput } from "./DescribeGameSessionQueuesInput";
import { DescribeGameSessionQueuesOutput } from "./DescribeGameSessionQueuesOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
