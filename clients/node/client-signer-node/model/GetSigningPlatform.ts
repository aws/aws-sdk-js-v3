import { GetSigningPlatformInput } from "./GetSigningPlatformInput";
import { GetSigningPlatformOutput } from "./GetSigningPlatformOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
