import { DescribeConfigurationRevisionInput } from "./DescribeConfigurationRevisionInput";
import { DescribeConfigurationRevisionOutput } from "./DescribeConfigurationRevisionOutput";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
