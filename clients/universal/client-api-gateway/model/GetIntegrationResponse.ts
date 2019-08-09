import { GetIntegrationResponseInput } from "./GetIntegrationResponseInput";
import { GetIntegrationResponseOutput } from "./GetIntegrationResponseOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetIntegrationResponse: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIntegrationResponse",
  http: {
    method: "GET",
    requestUri:
      "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}"
  },
  input: {
    shape: GetIntegrationResponseInput
  },
  output: {
    shape: GetIntegrationResponseOutput
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
    }
  ]
};
