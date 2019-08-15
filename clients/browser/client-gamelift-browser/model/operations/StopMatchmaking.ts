import { StopMatchmakingInput } from "../shapes/StopMatchmakingInput";
import { StopMatchmakingOutput } from "../shapes/StopMatchmakingOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { UnsupportedRegionException } from "../shapes/UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopMatchmaking: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopMatchmaking",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopMatchmakingInput
  },
  output: {
    shape: StopMatchmakingOutput
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
