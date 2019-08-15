import { DeleteMatchmakingRuleSetInput } from "../shapes/DeleteMatchmakingRuleSetInput";
import { DeleteMatchmakingRuleSetOutput } from "../shapes/DeleteMatchmakingRuleSetOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { UnsupportedRegionException } from "../shapes/UnsupportedRegionException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
