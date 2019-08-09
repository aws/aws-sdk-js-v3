import { DeleteSecurityProfileInput } from "./DeleteSecurityProfileInput";
import { DeleteSecurityProfileOutput } from "./DeleteSecurityProfileOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { VersionConflictException } from "./VersionConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteSecurityProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSecurityProfile",
  http: {
    method: "DELETE",
    requestUri: "/security-profiles/{securityProfileName}"
  },
  input: {
    shape: DeleteSecurityProfileInput
  },
  output: {
    shape: DeleteSecurityProfileOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: VersionConflictException
    }
  ]
};
