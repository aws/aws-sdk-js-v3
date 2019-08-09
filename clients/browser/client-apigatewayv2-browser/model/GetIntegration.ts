import { GetIntegrationInput } from "./GetIntegrationInput";
import { GetIntegrationOutput } from "./GetIntegrationOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetIntegration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIntegration",
  http: {
    method: "GET",
    requestUri: "/v2/apis/{apiId}/integrations/{integrationId}"
  },
  input: {
    shape: GetIntegrationInput
  },
  output: {
    shape: GetIntegrationOutput
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
