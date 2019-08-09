import { GetBasePathMappingInput } from "./GetBasePathMappingInput";
import { GetBasePathMappingOutput } from "./GetBasePathMappingOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBasePathMapping: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBasePathMapping",
  http: {
    method: "GET",
    requestUri: "/domainnames/{domain_name}/basepathmappings/{base_path}"
  },
  input: {
    shape: GetBasePathMappingInput
  },
  output: {
    shape: GetBasePathMappingOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
