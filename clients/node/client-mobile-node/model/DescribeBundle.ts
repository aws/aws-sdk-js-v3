import { DescribeBundleInput } from "./DescribeBundleInput";
import { DescribeBundleOutput } from "./DescribeBundleOutput";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeBundle: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBundle",
  http: {
    method: "GET",
    requestUri: "/bundles/{bundleId}"
  },
  input: {
    shape: DescribeBundleInput
  },
  output: {
    shape: DescribeBundleOutput
  },
  errors: [
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: NotFoundException
    }
  ]
};
