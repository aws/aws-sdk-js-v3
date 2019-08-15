import { DescribeConfigurationRevisionInput } from "../shapes/DescribeConfigurationRevisionInput";
import { DescribeConfigurationRevisionOutput } from "../shapes/DescribeConfigurationRevisionOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeConfigurationRevision: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConfigurationRevision",
  http: {
    method: "GET",
    requestUri:
      "/v1/configurations/{configuration-id}/revisions/{configuration-revision}"
  },
  input: {
    shape: DescribeConfigurationRevisionInput
  },
  output: {
    shape: DescribeConfigurationRevisionOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    }
  ]
};
