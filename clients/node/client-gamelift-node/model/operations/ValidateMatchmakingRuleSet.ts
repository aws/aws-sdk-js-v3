import { ValidateMatchmakingRuleSetInput } from "../shapes/ValidateMatchmakingRuleSetInput";
import { ValidateMatchmakingRuleSetOutput } from "../shapes/ValidateMatchmakingRuleSetOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { UnsupportedRegionException } from "../shapes/UnsupportedRegionException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ValidateMatchmakingRuleSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ValidateMatchmakingRuleSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ValidateMatchmakingRuleSetInput
  },
  output: {
    shape: ValidateMatchmakingRuleSetOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: UnsupportedRegionException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
