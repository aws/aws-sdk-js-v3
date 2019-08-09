import { GetSigningProfileInput } from "./GetSigningProfileInput";
import { GetSigningProfileOutput } from "./GetSigningProfileOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSigningProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSigningProfile",
  http: {
    method: "GET",
    requestUri: "/signing-profiles/{profileName}"
  },
  input: {
    shape: GetSigningProfileInput
  },
  output: {
    shape: GetSigningProfileOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
