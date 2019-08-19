import { DescribeConfigurationInput } from "../shapes/DescribeConfigurationInput";
import { DescribeConfigurationOutput } from "../shapes/DescribeConfigurationOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConfiguration",
  http: {
    method: "GET",
    requestUri: "/v1/configurations/{arn}"
  },
  input: {
    shape: DescribeConfigurationInput
  },
  output: {
    shape: DescribeConfigurationOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
