import { StartMatchmakingInput } from "./StartMatchmakingInput";
import { StartMatchmakingOutput } from "./StartMatchmakingOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
