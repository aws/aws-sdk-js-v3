import { CreateMatchmakingConfigurationInput } from "./CreateMatchmakingConfigurationInput";
import { CreateMatchmakingConfigurationOutput } from "./CreateMatchmakingConfigurationOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
