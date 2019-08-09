import { DeleteMatchmakingRuleSetInput } from "./DeleteMatchmakingRuleSetInput";
import { DeleteMatchmakingRuleSetOutput } from "./DeleteMatchmakingRuleSetOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteMatchmakingRuleSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteMatchmakingRuleSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteMatchmakingRuleSetInput
  },
  output: {
    shape: DeleteMatchmakingRuleSetOutput
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
    },
    {
      shape: NotFoundException
    }
  ]
};
