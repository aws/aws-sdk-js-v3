import { UpdateSecurityProfileInput } from "../shapes/UpdateSecurityProfileInput";
import { UpdateSecurityProfileOutput } from "../shapes/UpdateSecurityProfileOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { VersionConflictException } from "../shapes/VersionConflictException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateSecurityProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSecurityProfile",
  http: {
    method: "PATCH",
    requestUri: "/security-profiles/{securityProfileName}"
  },
  input: {
    shape: UpdateSecurityProfileInput
  },
  output: {
    shape: UpdateSecurityProfileOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: VersionConflictException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
