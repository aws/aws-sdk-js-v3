import { CancelSigningProfileInput } from "../shapes/CancelSigningProfileInput";
import { CancelSigningProfileOutput } from "../shapes/CancelSigningProfileOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
