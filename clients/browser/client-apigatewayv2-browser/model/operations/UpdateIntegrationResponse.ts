import { UpdateIntegrationResponseInput } from "../shapes/UpdateIntegrationResponseInput";
import { UpdateIntegrationResponseOutput } from "../shapes/UpdateIntegrationResponseOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateIntegrationResponse: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateIntegrationResponse",
  http: {
    method: "PATCH",
    requestUri:
      "/v2/apis/{apiId}/integrations/{integrationId}/integrationresponses/{integrationResponseId}"
  },
  input: {
    shape: UpdateIntegrationResponseInput
  },
  output: {
    shape: UpdateIntegrationResponseOutput
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
