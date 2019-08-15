import { StartMatchmakingInput } from "../shapes/StartMatchmakingInput";
import { StartMatchmakingOutput } from "../shapes/StartMatchmakingOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { UnsupportedRegionException } from "../shapes/UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartMatchmaking: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartMatchmaking",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartMatchmakingInput
  },
  output: {
    shape: StartMatchmakingOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: UnsupportedRegionException
    }
  ]
};
