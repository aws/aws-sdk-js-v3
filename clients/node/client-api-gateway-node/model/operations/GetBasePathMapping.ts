import { GetBasePathMappingInput } from "../shapes/GetBasePathMappingInput";
import { GetBasePathMappingOutput } from "../shapes/GetBasePathMappingOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
