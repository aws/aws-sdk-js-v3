import { CreateBasePathMappingInput } from "../shapes/CreateBasePathMappingInput";
import { CreateBasePathMappingOutput } from "../shapes/CreateBasePathMappingOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ConflictException } from "../shapes/ConflictException";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateBasePathMapping: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBasePathMapping",
  http: {
    method: "POST",
    requestUri: "/domainnames/{domain_name}/basepathmappings"
  },
  input: {
    shape: CreateBasePathMappingInput
  },
  output: {
    shape: CreateBasePathMappingOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: ConflictException
    },
    {
      shape: BadRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
