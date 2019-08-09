import { DeleteBasePathMappingInput } from "./DeleteBasePathMappingInput";
import { DeleteBasePathMappingOutput } from "./DeleteBasePathMappingOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteBasePathMapping: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBasePathMapping",
  http: {
    method: "DELETE",
    requestUri: "/domainnames/{domain_name}/basepathmappings/{base_path}"
  },
  input: {
    shape: DeleteBasePathMappingInput
  },
  output: {
    shape: DeleteBasePathMappingOutput
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
