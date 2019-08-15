import { GetApiMappingsInput } from "../shapes/GetApiMappingsInput";
import { GetApiMappingsOutput } from "../shapes/GetApiMappingsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetApiMappings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApiMappings",
  http: {
    method: "GET",
    requestUri: "/v2/domainnames/{domainName}/apimappings"
  },
  input: {
    shape: GetApiMappingsInput
  },
  output: {
    shape: GetApiMappingsOutput
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
