import { GetSigningProfileInput } from "../shapes/GetSigningProfileInput";
import { GetSigningProfileOutput } from "../shapes/GetSigningProfileOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
