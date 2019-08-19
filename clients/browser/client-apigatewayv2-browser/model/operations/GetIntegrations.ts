import { GetIntegrationsInput } from "../shapes/GetIntegrationsInput";
import { GetIntegrationsOutput } from "../shapes/GetIntegrationsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
