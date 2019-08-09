import { DescribeConfigurationInput } from "./DescribeConfigurationInput";
import { DescribeConfigurationOutput } from "./DescribeConfigurationOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
