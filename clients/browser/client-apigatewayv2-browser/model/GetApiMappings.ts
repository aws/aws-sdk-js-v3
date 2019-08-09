import { GetApiMappingsInput } from "./GetApiMappingsInput";
import { GetApiMappingsOutput } from "./GetApiMappingsOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
