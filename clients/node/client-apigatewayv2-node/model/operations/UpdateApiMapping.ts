import { UpdateApiMappingInput } from "../shapes/UpdateApiMappingInput";
import { UpdateApiMappingOutput } from "../shapes/UpdateApiMappingOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateApiMapping: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApiMapping",
  http: {
    method: "PATCH",
    requestUri: "/v2/domainnames/{domainName}/apimappings/{apiMappingId}"
  },
  input: {
    shape: UpdateApiMappingInput
  },
  output: {
    shape: UpdateApiMappingOutput
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
    },
    {
      shape: ConflictException
    }
  ]
};
