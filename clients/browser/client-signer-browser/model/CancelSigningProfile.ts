import { CancelSigningProfileInput } from "./CancelSigningProfileInput";
import { CancelSigningProfileOutput } from "./CancelSigningProfileOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CancelSigningProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelSigningProfile",
  http: {
    method: "DELETE",
    requestUri: "/signing-profiles/{profileName}"
  },
  input: {
    shape: CancelSigningProfileInput
  },
  output: {
    shape: CancelSigningProfileOutput
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
