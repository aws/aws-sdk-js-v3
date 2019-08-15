import { GetIntegrationResponseInput } from "../shapes/GetIntegrationResponseInput";
import { GetIntegrationResponseOutput } from "../shapes/GetIntegrationResponseOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
