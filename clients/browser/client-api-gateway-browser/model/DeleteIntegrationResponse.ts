import { DeleteIntegrationResponseInput } from "./DeleteIntegrationResponseInput";
import { DeleteIntegrationResponseOutput } from "./DeleteIntegrationResponseOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
