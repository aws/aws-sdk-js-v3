import { UpdateMatchmakingConfigurationInput } from "./UpdateMatchmakingConfigurationInput";
import { UpdateMatchmakingConfigurationOutput } from "./UpdateMatchmakingConfigurationOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
