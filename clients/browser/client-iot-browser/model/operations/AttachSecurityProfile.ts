import { AttachSecurityProfileInput } from "../shapes/AttachSecurityProfileInput";
import { AttachSecurityProfileOutput } from "../shapes/AttachSecurityProfileOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { VersionConflictException } from "../shapes/VersionConflictException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
