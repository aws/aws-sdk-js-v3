import { DeleteIntegrationInput } from "../shapes/DeleteIntegrationInput";
import { DeleteIntegrationOutput } from "../shapes/DeleteIntegrationOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteIntegration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteIntegration",
  http: {
    method: "DELETE",
    requestUri:
      "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration"
  },
  input: {
    shape: DeleteIntegrationInput
  },
  output: {
    shape: DeleteIntegrationOutput
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
      shape: ConflictException
    }
  ]
};
