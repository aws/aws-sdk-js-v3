import { CreateMatchmakingRuleSetInput } from "./CreateMatchmakingRuleSetInput";
import { CreateMatchmakingRuleSetOutput } from "./CreateMatchmakingRuleSetOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
