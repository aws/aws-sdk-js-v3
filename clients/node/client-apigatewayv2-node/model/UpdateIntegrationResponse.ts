import { UpdateIntegrationResponseInput } from "./UpdateIntegrationResponseInput";
import { UpdateIntegrationResponseOutput } from "./UpdateIntegrationResponseOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
