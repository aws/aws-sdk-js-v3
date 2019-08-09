import { DeleteMatchmakingConfigurationInput } from "./DeleteMatchmakingConfigurationInput";
import { DeleteMatchmakingConfigurationOutput } from "./DeleteMatchmakingConfigurationOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
