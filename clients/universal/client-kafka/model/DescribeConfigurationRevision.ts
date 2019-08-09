import { DescribeConfigurationRevisionInput } from "./DescribeConfigurationRevisionInput";
import { DescribeConfigurationRevisionOutput } from "./DescribeConfigurationRevisionOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
