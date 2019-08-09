import { AttachSecurityProfileInput } from "./AttachSecurityProfileInput";
import { AttachSecurityProfileOutput } from "./AttachSecurityProfileOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { VersionConflictException } from "./VersionConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AttachSecurityProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachSecurityProfile",
  http: {
    method: "PUT",
    requestUri: "/security-profiles/{securityProfileName}/targets"
  },
  input: {
    shape: AttachSecurityProfileInput
  },
  output: {
    shape: AttachSecurityProfileOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
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
