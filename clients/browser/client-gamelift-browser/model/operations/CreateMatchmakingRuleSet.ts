import { CreateMatchmakingRuleSetInput } from "../shapes/CreateMatchmakingRuleSetInput";
import { CreateMatchmakingRuleSetOutput } from "../shapes/CreateMatchmakingRuleSetOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { UnsupportedRegionException } from "../shapes/UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateMatchmakingRuleSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateMatchmakingRuleSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateMatchmakingRuleSetInput
  },
  output: {
    shape: CreateMatchmakingRuleSetOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: UnsupportedRegionException
    }
  ]
};
