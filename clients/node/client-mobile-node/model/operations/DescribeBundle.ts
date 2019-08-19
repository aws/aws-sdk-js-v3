import { DescribeBundleInput } from "../shapes/DescribeBundleInput";
import { DescribeBundleOutput } from "../shapes/DescribeBundleOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
