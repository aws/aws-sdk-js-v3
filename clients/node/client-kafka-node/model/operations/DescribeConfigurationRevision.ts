import { DescribeConfigurationRevisionInput } from "../shapes/DescribeConfigurationRevisionInput";
import { DescribeConfigurationRevisionOutput } from "../shapes/DescribeConfigurationRevisionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeConfigurationRevision: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConfigurationRevision",
  http: {
    method: "GET",
    requestUri: "/v1/configurations/{arn}/revisions/{revision}"
  },
  input: {
    shape: DescribeConfigurationRevisionInput
  },
  output: {
    shape: DescribeConfigurationRevisionOutput
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
