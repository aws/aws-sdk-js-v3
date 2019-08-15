import { CreateMatchmakingConfigurationInput } from "../shapes/CreateMatchmakingConfigurationInput";
import { CreateMatchmakingConfigurationOutput } from "../shapes/CreateMatchmakingConfigurationOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { UnsupportedRegionException } from "../shapes/UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateMatchmakingConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateMatchmakingConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateMatchmakingConfigurationInput
  },
  output: {
    shape: CreateMatchmakingConfigurationOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: LimitExceededException
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
