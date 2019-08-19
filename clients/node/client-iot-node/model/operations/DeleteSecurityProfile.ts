import { DeleteSecurityProfileInput } from "../shapes/DeleteSecurityProfileInput";
import { DeleteSecurityProfileOutput } from "../shapes/DeleteSecurityProfileOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { VersionConflictException } from "../shapes/VersionConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
