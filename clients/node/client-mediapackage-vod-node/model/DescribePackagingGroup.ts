import { DescribePackagingGroupInput } from "./DescribePackagingGroupInput";
import { DescribePackagingGroupOutput } from "./DescribePackagingGroupOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
