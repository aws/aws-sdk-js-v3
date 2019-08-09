import { UpdateApiMappingInput } from "./UpdateApiMappingInput";
import { UpdateApiMappingOutput } from "./UpdateApiMappingOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
