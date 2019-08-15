import { DescribeBuildInput } from "../shapes/DescribeBuildInput";
import { DescribeBuildOutput } from "../shapes/DescribeBuildOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeBuild: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBuild",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeBuildInput
  },
  output: {
    shape: DescribeBuildOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalServiceException
    }
  ]
};
