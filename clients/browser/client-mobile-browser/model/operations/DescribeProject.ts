import { DescribeProjectInput } from "../shapes/DescribeProjectInput";
import { DescribeProjectOutput } from "../shapes/DescribeProjectOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeProject",
  http: {
    method: "GET",
    requestUri: "/project"
  },
  input: {
    shape: DescribeProjectInput
  },
  output: {
    shape: DescribeProjectOutput
  },
  errors: [
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: NotFoundException
    }
  ]
};
