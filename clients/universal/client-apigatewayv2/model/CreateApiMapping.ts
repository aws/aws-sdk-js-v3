import { CreateApiMappingInput } from "./CreateApiMappingInput";
import { CreateApiMappingOutput } from "./CreateApiMappingOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
