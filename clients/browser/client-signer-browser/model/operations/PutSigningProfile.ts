import { PutSigningProfileInput } from "../shapes/PutSigningProfileInput";
import { PutSigningProfileOutput } from "../shapes/PutSigningProfileOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ValidationException } from "../shapes/ValidationException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
