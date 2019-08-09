import { UpdateBasePathMappingInput } from "./UpdateBasePathMappingInput";
import { UpdateBasePathMappingOutput } from "./UpdateBasePathMappingOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
