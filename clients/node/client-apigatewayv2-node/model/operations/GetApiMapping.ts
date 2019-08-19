import { GetApiMappingInput } from "../shapes/GetApiMappingInput";
import { GetApiMappingOutput } from "../shapes/GetApiMappingOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetApiMapping: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApiMapping",
  http: {
    method: "GET",
    requestUri: "/v2/domainnames/{domainName}/apimappings/{apiMappingId}"
  },
  input: {
    shape: GetApiMappingInput
  },
  output: {
    shape: GetApiMappingOutput
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
