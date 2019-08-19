import { DescribeAssetInput } from "../shapes/DescribeAssetInput";
import { DescribeAssetOutput } from "../shapes/DescribeAssetOutput";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAsset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAsset",
  http: {
    method: "GET",
    requestUri: "/assets/{id}"
  },
  input: {
    shape: DescribeAssetInput
  },
  output: {
    shape: DescribeAssetOutput
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
