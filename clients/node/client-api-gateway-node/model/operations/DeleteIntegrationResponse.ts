import { DeleteIntegrationResponseInput } from "../shapes/DeleteIntegrationResponseInput";
import { DeleteIntegrationResponseOutput } from "../shapes/DeleteIntegrationResponseOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteIntegrationResponse: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteIntegrationResponse",
  http: {
    method: "DELETE",
    requestUri:
      "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}"
  },
  input: {
    shape: DeleteIntegrationResponseInput
  },
  output: {
    shape: DeleteIntegrationResponseOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
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
