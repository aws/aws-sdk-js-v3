import { CreateApiMappingInput } from "../shapes/CreateApiMappingInput";
import { CreateApiMappingOutput } from "../shapes/CreateApiMappingOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateApiMapping: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateApiMapping",
  http: {
    method: "POST",
    requestUri: "/v2/domainnames/{domainName}/apimappings"
  },
  input: {
    shape: CreateApiMappingInput
  },
  output: {
    shape: CreateApiMappingOutput
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
