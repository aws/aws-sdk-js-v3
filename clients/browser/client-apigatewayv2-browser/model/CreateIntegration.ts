import { CreateIntegrationInput } from "./CreateIntegrationInput";
import { CreateIntegrationOutput } from "./CreateIntegrationOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateIntegration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateIntegration",
  http: {
    method: "POST",
    requestUri: "/v2/apis/{apiId}/integrations"
  },
  input: {
    shape: CreateIntegrationInput
  },
  output: {
    shape: CreateIntegrationOutput
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
