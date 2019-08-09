import { DescribeMatchmakingRuleSetsInput } from "./DescribeMatchmakingRuleSetsInput";
import { DescribeMatchmakingRuleSetsOutput } from "./DescribeMatchmakingRuleSetsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
