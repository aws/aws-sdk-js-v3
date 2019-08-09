import { CreateBasePathMappingInput } from "./CreateBasePathMappingInput";
import { CreateBasePathMappingOutput } from "./CreateBasePathMappingOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { ConflictException } from "./ConflictException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
