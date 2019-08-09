import { UpdateSecretVersionStageInput } from "./UpdateSecretVersionStageInput";
import { UpdateSecretVersionStageOutput } from "./UpdateSecretVersionStageOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceError } from "./InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
