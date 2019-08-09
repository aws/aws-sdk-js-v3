import { UpdateIntegrationInput } from "./UpdateIntegrationInput";
import { UpdateIntegrationOutput } from "./UpdateIntegrationOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateIntegration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateIntegration",
  http: {
    method: "PATCH",
    requestUri: "/v2/apis/{apiId}/integrations/{integrationId}"
  },
  input: {
    shape: UpdateIntegrationInput
  },
  output: {
    shape: UpdateIntegrationOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    }
  ]
};
