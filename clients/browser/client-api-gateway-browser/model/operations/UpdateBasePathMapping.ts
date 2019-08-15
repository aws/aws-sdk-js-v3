import { UpdateBasePathMappingInput } from "../shapes/UpdateBasePathMappingInput";
import { UpdateBasePathMappingOutput } from "../shapes/UpdateBasePathMappingOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateBasePathMapping: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateBasePathMapping",
  http: {
    method: "PATCH",
    requestUri: "/domainnames/{domain_name}/basepathmappings/{base_path}"
  },
  input: {
    shape: UpdateBasePathMappingInput
  },
  output: {
    shape: UpdateBasePathMappingOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ConflictException
    },
    {
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
