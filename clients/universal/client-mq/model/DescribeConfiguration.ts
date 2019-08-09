import { DescribeConfigurationInput } from "./DescribeConfigurationInput";
import { DescribeConfigurationOutput } from "./DescribeConfigurationOutput";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConfiguration",
  http: {
    method: "GET",
    requestUri: "/v1/configurations/{configuration-id}"
  },
  input: {
    shape: DescribeConfigurationInput
  },
  output: {
    shape: DescribeConfigurationOutput
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
