import { UpdateSecretVersionStageInput } from "../shapes/UpdateSecretVersionStageInput";
import { UpdateSecretVersionStageOutput } from "../shapes/UpdateSecretVersionStageOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateSecretVersionStage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSecretVersionStage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateSecretVersionStageInput
  },
  output: {
    shape: UpdateSecretVersionStageOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServiceError
    }
  ]
};
