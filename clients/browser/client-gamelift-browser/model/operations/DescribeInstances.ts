import { DescribeInstancesInput } from "../shapes/DescribeInstancesInput";
import { DescribeInstancesOutput } from "../shapes/DescribeInstancesOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeInstancesInput
  },
  output: {
    shape: DescribeInstancesOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalServiceException
    }
  ]
};
