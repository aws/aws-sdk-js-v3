import { GetBasePathMappingsInput } from "../shapes/GetBasePathMappingsInput";
import { GetBasePathMappingsOutput } from "../shapes/GetBasePathMappingsOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
