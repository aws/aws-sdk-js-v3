import { GetIntegrationResponseInput } from "./GetIntegrationResponseInput";
import { GetIntegrationResponseOutput } from "./GetIntegrationResponseOutput";
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
      "/v2/apis/{apiId}/integrations/{integrationId}/integrationresponses/{integrationResponseId}"
  },
  input: {
    shape: GetIntegrationResponseInput
  },
  output: {
    shape: GetIntegrationResponseOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
