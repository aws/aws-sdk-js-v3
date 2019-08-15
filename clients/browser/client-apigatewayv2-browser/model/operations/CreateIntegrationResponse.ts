import { CreateIntegrationResponseInput } from "../shapes/CreateIntegrationResponseInput";
import { CreateIntegrationResponseOutput } from "../shapes/CreateIntegrationResponseOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateIntegrationResponse: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateIntegrationResponse",
  http: {
    method: "POST",
    requestUri:
      "/v2/apis/{apiId}/integrations/{integrationId}/integrationresponses"
  },
  input: {
    shape: CreateIntegrationResponseInput
  },
  output: {
    shape: CreateIntegrationResponseOutput
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
