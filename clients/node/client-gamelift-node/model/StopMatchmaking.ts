import { StopMatchmakingInput } from "./StopMatchmakingInput";
import { StopMatchmakingOutput } from "./StopMatchmakingOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
