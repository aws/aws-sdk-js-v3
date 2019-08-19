import { DescribeMatchmakingRuleSetsInput } from "../shapes/DescribeMatchmakingRuleSetsInput";
import { DescribeMatchmakingRuleSetsOutput } from "../shapes/DescribeMatchmakingRuleSetsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnsupportedRegionException } from "../shapes/UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeMatchmakingRuleSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMatchmakingRuleSets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMatchmakingRuleSetsInput
  },
  output: {
    shape: DescribeMatchmakingRuleSetsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: NotFoundException
    },
    {
      shape: UnsupportedRegionException
    }
  ]
};
