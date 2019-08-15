import { DescribeConfigurationInput } from "../shapes/DescribeConfigurationInput";
import { DescribeConfigurationOutput } from "../shapes/DescribeConfigurationOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
