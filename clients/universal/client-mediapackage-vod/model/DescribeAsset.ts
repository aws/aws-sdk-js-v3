import { DescribeAssetInput } from "./DescribeAssetInput";
import { DescribeAssetOutput } from "./DescribeAssetOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
