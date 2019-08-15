import { DeleteMatchmakingConfigurationInput } from "../shapes/DeleteMatchmakingConfigurationInput";
import { DeleteMatchmakingConfigurationOutput } from "../shapes/DeleteMatchmakingConfigurationOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { UnsupportedRegionException } from "../shapes/UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteMatchmakingConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteMatchmakingConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteMatchmakingConfigurationInput
  },
  output: {
    shape: DeleteMatchmakingConfigurationOutput
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
