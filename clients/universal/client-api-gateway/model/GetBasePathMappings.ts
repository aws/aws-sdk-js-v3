import { GetBasePathMappingsInput } from "./GetBasePathMappingsInput";
import { GetBasePathMappingsOutput } from "./GetBasePathMappingsOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBasePathMappings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBasePathMappings",
  http: {
    method: "GET",
    requestUri: "/domainnames/{domain_name}/basepathmappings"
  },
  input: {
    shape: GetBasePathMappingsInput
  },
  output: {
    shape: GetBasePathMappingsOutput
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
