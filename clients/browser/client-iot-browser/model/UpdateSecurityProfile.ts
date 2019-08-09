import { UpdateSecurityProfileInput } from "./UpdateSecurityProfileInput";
import { UpdateSecurityProfileOutput } from "./UpdateSecurityProfileOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { VersionConflictException } from "./VersionConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
