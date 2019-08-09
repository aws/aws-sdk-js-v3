import { PutSigningProfileInput } from "./PutSigningProfileInput";
import { PutSigningProfileOutput } from "./PutSigningProfileOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ValidationException } from "./ValidationException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutSigningProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutSigningProfile",
  http: {
    method: "PUT",
    requestUri: "/signing-profiles/{profileName}"
  },
  input: {
    shape: PutSigningProfileInput
  },
  output: {
    shape: PutSigningProfileOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ValidationException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
