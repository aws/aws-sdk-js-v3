import { GetIntegrationResponsesInput } from "../shapes/GetIntegrationResponsesInput";
import { GetIntegrationResponsesOutput } from "../shapes/GetIntegrationResponsesOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetIntegrationResponses: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIntegrationResponses",
  http: {
    method: "GET",
    requestUri:
      "/v2/apis/{apiId}/integrations/{integrationId}/integrationresponses"
  },
  input: {
    shape: GetIntegrationResponsesInput
  },
  output: {
    shape: GetIntegrationResponsesOutput
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
    }
  ]
};
