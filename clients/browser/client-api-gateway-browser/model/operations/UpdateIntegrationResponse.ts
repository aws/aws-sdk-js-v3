import { UpdateIntegrationResponseInput } from "../shapes/UpdateIntegrationResponseInput";
import { UpdateIntegrationResponseOutput } from "../shapes/UpdateIntegrationResponseOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateIntegrationResponse: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateIntegrationResponse",
  http: {
    method: "PATCH",
    requestUri:
      "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}"
  },
  input: {
    shape: UpdateIntegrationResponseInput
  },
  output: {
    shape: UpdateIntegrationResponseOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ConflictException
    },
    {
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
