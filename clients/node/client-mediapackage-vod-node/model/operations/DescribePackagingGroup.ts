import { DescribePackagingGroupInput } from "../shapes/DescribePackagingGroupInput";
import { DescribePackagingGroupOutput } from "../shapes/DescribePackagingGroupOutput";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribePackagingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePackagingGroup",
  http: {
    method: "GET",
    requestUri: "/packaging_groups/{id}"
  },
  input: {
    shape: DescribePackagingGroupInput
  },
  output: {
    shape: DescribePackagingGroupOutput
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
