import { UpdateMatchmakingConfigurationInput } from "../shapes/UpdateMatchmakingConfigurationInput";
import { UpdateMatchmakingConfigurationOutput } from "../shapes/UpdateMatchmakingConfigurationOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { UnsupportedRegionException } from "../shapes/UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateMatchmakingConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateMatchmakingConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateMatchmakingConfigurationInput
  },
  output: {
    shape: UpdateMatchmakingConfigurationOutput
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
