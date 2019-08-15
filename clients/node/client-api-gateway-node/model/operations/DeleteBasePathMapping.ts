import { DeleteBasePathMappingInput } from "../shapes/DeleteBasePathMappingInput";
import { DeleteBasePathMappingOutput } from "../shapes/DeleteBasePathMappingOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
