import { GetSigningPlatformInput } from "../shapes/GetSigningPlatformInput";
import { GetSigningPlatformOutput } from "../shapes/GetSigningPlatformOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSigningPlatform: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSigningPlatform",
  http: {
    method: "GET",
    requestUri: "/signing-platforms/{platformId}"
  },
  input: {
    shape: GetSigningPlatformInput
  },
  output: {
    shape: GetSigningPlatformOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
