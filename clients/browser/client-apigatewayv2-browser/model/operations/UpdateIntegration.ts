import { UpdateIntegrationInput } from "../shapes/UpdateIntegrationInput";
import { UpdateIntegrationOutput } from "../shapes/UpdateIntegrationOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
