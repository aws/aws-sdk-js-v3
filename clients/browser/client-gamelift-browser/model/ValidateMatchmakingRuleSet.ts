import { ValidateMatchmakingRuleSetInput } from "./ValidateMatchmakingRuleSetInput";
import { ValidateMatchmakingRuleSetOutput } from "./ValidateMatchmakingRuleSetOutput";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
