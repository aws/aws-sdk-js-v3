import { DescribePackagingConfigurationInput } from "./DescribePackagingConfigurationInput";
import { DescribePackagingConfigurationOutput } from "./DescribePackagingConfigurationOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
