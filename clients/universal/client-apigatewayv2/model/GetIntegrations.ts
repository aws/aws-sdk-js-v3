import { GetIntegrationsInput } from "./GetIntegrationsInput";
import { GetIntegrationsOutput } from "./GetIntegrationsOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetIntegrations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIntegrations",
  http: {
    method: "GET",
    requestUri: "/v2/apis/{apiId}/integrations"
  },
  input: {
    shape: GetIntegrationsInput
  },
  output: {
    shape: GetIntegrationsOutput
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
