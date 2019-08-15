import { DescribePackagingConfigurationInput } from "../shapes/DescribePackagingConfigurationInput";
import { DescribePackagingConfigurationOutput } from "../shapes/DescribePackagingConfigurationOutput";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribePackagingConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePackagingConfiguration",
  http: {
    method: "GET",
    requestUri: "/packaging_configurations/{id}"
  },
  input: {
    shape: DescribePackagingConfigurationInput
  },
  output: {
    shape: DescribePackagingConfigurationOutput
  },
  errors: [
    {
      shape: UnprocessableEntityException
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
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
